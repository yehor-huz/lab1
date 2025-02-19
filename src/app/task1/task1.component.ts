import { IonCard, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss'],
  standalone: true,
  imports: [IonCard, IonItem, IonInput, IonButton]
})
export class Task1Component {
  result: any = "No result";
  calculate(a: any, b: any, c:any)
  {
    if(isNaN(a) || isNaN(b) || isNaN(c))
    {
      throw new Error("Wrong parameter");
    }
    try{
    let sum = +a + +b + +c;
    let counter = 0;
    if(sum % 2 != 0)
    {
      for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        if(element % 27 == 0)
        {
          counter++;
        }
        
      }
      this.result = "Result is " + counter;
      return 0;
    }
    
    this.result = "The sum is not even";
    return 0;}
    catch(error) {
      this.result = "Error"
      console.log(error);
      return 0;
      
    }
  }
  constructor() { }

}
