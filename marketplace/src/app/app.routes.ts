import { Routes } from '@angular/router';

import { AccessibilityStatementComponent } from './pages/accessibility-statement/accessibility-statement.component';
import { ApiDocumentationComponent } from './pages/api-documentation/api-documentation.component';
import { DownloadComponent } from './pages/download/download.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'downloads',
    loadComponent: () =>
      import('./pages/download/download.component').then(
        () => DownloadComponent
      ),
    title: 'Download - Marketplace - FRIDA',
  },
  {
    path: 'accessibility-statement',
    loadComponent: () =>
      import(
        './pages/accessibility-statement/accessibility-statement.component'
      ).then(() => AccessibilityStatementComponent),
  },
  {
    path: 'apis/:apiPathParameter',
    loadComponent: () =>
      import('./pages/api-documentation/api-documentation.component').then(
        () => ApiDocumentationComponent
      ),
  },
  {
    path: '',
    component: HomePageComponent,
    title: 'Homepage - Marketplace - FRIDA',
  },
];
