import { Routes } from '@angular/router';

import { ApiDocumentationComponent } from './pages/api-documentation/api-documentation.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'api-explorer', redirectTo: 'api-explorer/', pathMatch: 'full' },
  {
    path: 'api-explorer/:apiPathParameter',
    component: ApiDocumentationComponent,
  },
  { path: '**', redirectTo: '' },
];
