import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'faculties',
    loadComponent: () => import('./faculties/faculties.page').then( m => m.FacultiesPage)
  },
  {
    path: 'abstract-class',
    loadComponent: () => import('./abstract-class/abstract-class.page').then( m => m.AbstractClassPage)
  },
  {
    path: 'services',
    loadComponent: () => import('./services/services.page').then( m => m.ServicesPage)
  },
];
