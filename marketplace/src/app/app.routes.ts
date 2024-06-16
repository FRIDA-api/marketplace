import { Routes } from '@angular/router';

import { ApiDocumentationComponent } from './pages/api-documentation/api-documentation.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DownloadComponent } from './pages/download/download.component';
import {AccessibilityStatementComponent} from "./pages/accessibility-statement/accessibility-statement.component";

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Homepage - Marketplace - FRIDA' },
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
      import('./pages/accessibility-statement/accessibility-statement.component').then(
        () => AccessibilityStatementComponent
      ),
  },
  {
    path: ':apiPathParameter',
    loadComponent: () =>
      import('./pages/api-documentation/api-documentation.component').then(
        () => ApiDocumentationComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
