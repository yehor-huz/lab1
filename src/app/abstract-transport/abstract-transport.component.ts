import { IonInput, IonCard, IonItem, IonList, IonButton } from '@ionic/angular/standalone';
import { IonCardHeader } from '@ionic/angular/standalone';
import { IonCardContent } from '@ionic/angular/standalone';
import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardTitle} from '@ionic/angular/standalone';
import { LabHeaderComponent } from "../lab-header/lab-header.component";
import { TransportFactory } from '../transport-factory';
import { Transport } from '../transport';

@Component({
  selector: 'app-abstract-transport-component',
  templateUrl: './abstract-transport.component.html',
  styleUrls: ['./abstract-transport.component.scss'],
  standalone: true,
  imports: [IonButton, IonList, IonItem, IonCard, CommonModule, FormsModule, IonCardContent, IonCardHeader, IonInput, IonCardTitle, CommonModule,NgFor]
})
export class AbstractTransportComponent implements OnInit {
  distance: number = 0;
  jsonData: any = [];
  transport: Transport[] = [];
  jsonUrl = 'https://api.jsonbin.io/v3/b/67c3050bacd3cb34a8f30a53';
  filteredTransport: Transport[] = [];

  filterTransport() {
    this.filteredTransport = [];
    this.transport.forEach(element => {
      if (element.getRange() >= this.distance) {
        this.filteredTransport.push(element);
      }
    });
  }

  ngOnInit() {
    this.loadJsonData();
    console.log(this.transport);
  }

  async loadJsonData() {
    fetch(this.jsonUrl)
      .then(response => response.json())
      .then(data => {
        this.jsonData = data.record.transport;
        let i = 0;
        while(this.jsonData[i] != undefined)
        {
          let t = TransportFactory.getTransport(this.jsonData[i].type, this.jsonData[i].name, this.jsonData[i].maxSpeed, this.jsonData[i].range, this.jsonData[i].fuelType | this.jsonData[i].gearCount);
          t.getFullInfo();
          this.transport.push(t);
          i++;
        }
      })
      .catch(error => console.error('Error loading JSON:', error));
  }

  getColor(s: string){
    if (s == "Car"){
      return '#FF5733';
    }
    else if (s == "Bicycle"){
      return '#33FF57';
    }
    return '#FFFFFF';
  }

}
