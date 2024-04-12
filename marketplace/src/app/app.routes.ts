import { Routes } from '@angular/router';

import { ApiDocumentationComponent } from './pages/api-documentation/api-documentation.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: ':apiPathParameter',
    component: ApiDocumentationComponent,
  },
  { path: '**', redirectTo: '' },
];
