import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { LabHeaderComponent } from "../lab-header/lab-header.component";
import { ServiceInputComponent } from "../service-input/service-input.component";

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LabHeaderComponent, ServiceInputComponent]
})
export class ServicesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
