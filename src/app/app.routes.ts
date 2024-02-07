import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'slots'
  },
  {
    path: 'slots',
    loadComponent: () => import('./pages/slots/slots.component').then(mod => mod.SlotsComponent)
  },
];
