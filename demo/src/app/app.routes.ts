import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'get-started',
    loadComponent: () => import('./get-started/get-started.component'),
    data: { label: 'Get Started' },
  },
  {
    path: 'render',
    loadComponent: () => import('./render/render.component'),
    data: { label: 'Render' },
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
