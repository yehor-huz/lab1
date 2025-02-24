import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonMenuToggle, IonMenu, IonContent, IonHeader, IonTitle, IonList, IonToolbar, IonButton  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonMenuToggle, IonMenu, IonContent, IonHeader, IonTitle, IonList, IonToolbar, IonButton   ],
})
export class AppComponent {
  constructor() {}
}
