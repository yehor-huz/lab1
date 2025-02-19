import { IonItem, IonCard } from '@ionic/angular/standalone';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-description',
  templateUrl: './task-description.component.html',
  styleUrls: ['./task-description.component.scss'],
  standalone: true,
  imports: [IonItem, IonCard ]
})
export class TaskDescriptionComponent  implements OnInit {
  @Input() description: string = "Завдання лабораторної" 
  constructor() { }

  ngOnInit() {}

}
