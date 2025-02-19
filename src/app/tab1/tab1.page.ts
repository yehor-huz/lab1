import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { LabHeaderComponent } from '../lab-header/lab-header.component';
import { TaskDescriptionComponent } from '../task-description/task-description.component';
import { Task1Component } from '../task1/task1.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, LabHeaderComponent, TaskDescriptionComponent, Task1Component],
})
export class Tab1Page {
  constructor() {}
}
