import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-lab-header',
  templateUrl: './lab-header.component.html',
  styleUrls: ['./lab-header.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle
  ]
})
export class LabHeaderComponent  implements OnInit {
  @Input() name: string = "Лабораторна робота";
  constructor() { }

  ngOnInit() {}

}
