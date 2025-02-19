import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { LabHeaderComponent } from '../lab-header/lab-header.component';
import { TaskDescriptionComponent } from '../task-description/task-description.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, LabHeaderComponent, TaskDescriptionComponent],
})
export class Tab3Page {
  constructor() {}
}
