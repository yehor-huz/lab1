import { Component, OnInit } from '@angular/core';
import { IonCard, IonInput, IonButton, IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss'],
  standalone: true,
  imports: [IonCard, IonInput, IonButton, IonItem]
})
export class Task2Component  implements OnInit {
  result: any = "No result";
  getNumbers(a: any, b: any){
    if(isNaN(a) || isNaN(b))
    {
      throw new Error("Wrong range");
    }
    try {
      this.result = "Numbers:";
      let sum: number = 0;
      for (let i: number = +a; i < +b; i++)
      {
        if(i % 17 == 0 && i % 4 == 2)
        {
          this.result += i + ",";
          sum += i;
        }
      }
      if(this.result == "Numbers:")
      {
        this.result = "There are no such numbers"
        return 0;
      }
      this.result += " Sum is " + sum;
      return 0;
      
    } catch (error) {
      this.result = "Error"
      console.log(error);
      return 0;
    }

  }
  constructor() { }

  ngOnInit() {}

}
