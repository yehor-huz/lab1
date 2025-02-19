import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { LabHeaderComponent } from '../lab-header/lab-header.component';
import { TaskDescriptionComponent } from "../task-description/task-description.component";
import { Task2Component } from '../task2/task2.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, LabHeaderComponent, TaskDescriptionComponent, Task2Component]
})
export class Tab2Page {

  constructor() {}

}
