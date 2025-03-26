import { Component } from '@angular/core';
import { IonCard, IonContent, IonList, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonButton, IonRow, IonCol, IonGrid, IonImg } from "@ionic/angular/standalone";
import { Chart } from 'chart.js';
import { TabulatingService } from '../services-fold/tabulating.service';
import { RecursionService } from '../services-fold/recursion.service';
import { SeriesService } from '../services-fold/series.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-service-input',
  templateUrl: './service-input.component.html',
  styleUrls: ['./service-input.component.scss'],
  standalone: true,
  imports: [IonImg, IonGrid, IonCol, IonRow, IonButton, IonInput, IonCard, IonContent, IonCardHeader, IonCardTitle, IonCardContent,  NgFor, NgIf]
})
export class ServiceInputComponent {
  plotChart: any;
  tableData: any[] = [];

  constructor(
    private tabService: TabulatingService,
    private recursionService: RecursionService,
    private seriesService: SeriesService
  ) {}

  calculateFunction(start: any, stop: any, step: any) {
    try {
      let x = parseFloat(start);
      let xStop = parseFloat(stop);
      let h = parseFloat(step);
      if (isNaN(x) || isNaN(xStop) || isNaN(h) || h <= 0) {
        throw new Error("Дані не є числами");
      }
      if (x < -1 || xStop > 1 || h > 1 || h < -1)
      {
        throw new Error("Дані виходять за межі діапазону");
      }

      let builtInResult = this.tabService.getTab(x, xStop, h);
      let recursionResult = this.recursionService.getTab(x, xStop, h);
      let taylorResult = this.seriesService.getTab(x, xStop, h);
  
      let xValues = builtInResult.x.map(Number);
      let builtInY = builtInResult.y.map(Number);
      let recursionY = recursionResult.y.map(Number);
      let taylorY = taylorResult.y.map(Number);
  
      this.tableData = xValues.map((xValue, index) => ({
        x: xValue.toFixed(2),
        builtInY: builtInY[index].toFixed(4),
        recursionY: recursionY[index].toFixed(4),
        taylorY: taylorY[index].toFixed(4),
      }));
      
      this.drawGraph(xValues, builtInY, recursionY, taylorY);
    } catch (error) {
      console.log(error)
    }




  }

  drawGraph(xValues: number[], builtInY: number[], recursionY: number[], taylorY: number[]) {
    const ctx = document.getElementById('plotChart') as HTMLCanvasElement;
    
    if (this.plotChart) {
      this.plotChart.destroy(); 
    }

    this.plotChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: xValues.map(v => v.toFixed(2)),
        datasets: [
          {
            label: 'Вбудований метод',
            data: builtInY,
            borderColor: 'blue',
            backgroundColor: 'blue',
            fill: false,
          },
          {
            label: 'Рекурсивний метод',
            data: recursionY,
            borderColor: 'green',
            backgroundColor: 'green',
            fill: false,
          },
          {
            label: 'Ряд Тейлора',
            data: taylorY,
            borderColor: 'red',
            backgroundColor: 'red',
            fill: false,
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: { title: { display: true, text: 'x' } },
          y: { title: { display: true, text: 'f(x)' } }
        }
      }
    });
  }
}

