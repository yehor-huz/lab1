import { NgFor, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonCard, IonInput, IonButton, IonItem, IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss'],
  standalone: true,
  imports: [IonCard, IonInput, IonButton, IonItem, IonGrid, IonRow, IonCol, NgFor, NgStyle]
})
export class Task3Component  implements OnInit {

  matrix: number[][] = [];
  getMatrix(size : any)
  {
    let n = parseInt(size);
    if(isNaN(n) || n <= 0){
      throw new Error("Error");
    }
    try {
      this.matrix = Array(n);
      let sum: number = 0;
      for (let i = 0; i < n; i++) {
        sum = 0;
        this.matrix[i] = Array(n);
        for (let j = 0; j < n; j++) {
          this.matrix[i][j] = Math.floor(Math.random() * 10) + 1;


        }
      
      }
      return 0;
      
    } catch (error) {
      console.log(error);
      return 0;
    }
  }

  getColor(b: number[]){
    let sum: number = 0;
    for (let index = 0; index < b.length; index++) {
      sum += b[index];
    }
    return  sum > 50 ? '#3B3355' : '#E15554';
  }

  constructor() { }

  ngOnInit() {}

}
