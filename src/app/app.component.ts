import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonItem, IonMenuToggle, IonMenu, IonContent, IonHeader, IonTitle, IonList, IonToolbar, IonCard, IonButton  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonItem, IonMenuToggle, IonMenu, IonContent, IonHeader, IonTitle, IonList, IonToolbar, IonCard, IonButton   ],
})
export class AppComponent {
  constructor() {}
}
