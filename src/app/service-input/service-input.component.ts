import { Component } from '@angular/core';
import { IonCard, IonContent, IonList, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonButton } from "@ionic/angular/standalone";
import { Chart } from 'chart.js';
import { TabulatingService } from '../tabulating.service';
import { RecursionService } from '../recursion.service';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-service-input',
  templateUrl: './service-input.component.html',
  styleUrls: ['./service-input.component.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonCard, IonContent, IonCardHeader, IonCardTitle, IonCardContent]
})
export class ServiceInputComponent {
  plotChart: any;

  constructor(
    private tabService: TabulatingService,
    private recursionService: RecursionService,
    private seriesService: SeriesService
  ) {}

  calculateFunction(start: any, stop: any, step: any) {
    let x = parseFloat(start);
    let xStop = parseFloat(stop);
    let h = parseFloat(step);

    if (isNaN(x) || isNaN(xStop) || isNaN(h) || h <= 0) {
      console.error("Некоректні вхідні дані");
      return;
    }

    let builtInResult = this.tabService.getTab(x, xStop, h);
    let recursionResult = this.recursionService.getTab(x, xStop, h);
    let taylorResult = this.seriesService.getTab(x, xStop, h);

    let xValues = builtInResult.x.map(Number);
    let builtInY = builtInResult.y.map(Number);
    let recursionY = recursionResult.y.map(Number);
    let taylorY = taylorResult.y.map(Number);
    
    this.drawGraph(xValues, builtInY, recursionY, taylorY);
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

