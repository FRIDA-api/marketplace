import { Routes } from '@angular/router';

import { ApiDocumentationComponent } from './pages/api-documentation/api-documentation.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DownloadComponent } from './pages/home-page/download/download.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'downloads',
    loadComponent: () =>
      import('./pages/home-page/download/download.component').then(
        () => DownloadComponent
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
