import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'get-started',
    loadComponent: () => import('./get-started/get-started.component'),
    data: { label: 'Get Started' },
  },
  {
    path: 'playground',
    loadComponent: () => import('./playground/playground.component'),
    data: { label: 'Playground' },
  },
  {
    path: '**',
    redirectTo: 'get-started',
  },
];
