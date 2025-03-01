import { IonInput } from '@ionic/angular/standalone';
import { IonCardHeader } from '@ionic/angular/standalone';
import { IonCardContent } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { LabHeaderComponent } from "../lab-header/lab-header.component";
import { TransportFactory } from '../transport-factory';
import { Transport } from '../transport';
import { AbstractTransportComponent } from '../abstract-transport/abstract-transport.component';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LabHeaderComponent, IonCardContent, IonCardHeader, IonInput, AbstractTransportComponent]
})
export class AbstractClassPage implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
