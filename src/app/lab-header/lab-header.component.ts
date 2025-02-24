import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-lab-header',
  templateUrl: './lab-header.component.html',
  styleUrls: ['./lab-header.component.scss'],
  standalone: true,
  imports: [IonButtons, 
    IonHeader,
    IonToolbar,
    IonTitle, IonMenuButton
  ]
})
export class LabHeaderComponent  implements OnInit {
  @Input() name: string = "Лабораторна робота";
  constructor() { }

  ngOnInit() {}

}
