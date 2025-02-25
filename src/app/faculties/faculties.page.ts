import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { LabHeaderComponent } from '../lab-header/lab-header.component';
import { FacultyPageComponent } from '../faculty-page/faculty-page.component';


@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.page.html',
  styleUrls: ['./faculties.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LabHeaderComponent, FacultyPageComponent]
})
export class FacultiesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
