import { Routes } from '@angular/router';

import { ApiDocumentationComponent } from './pages/api-documentation/api-documentation.component';
import { ApiMatrixComponent } from './pages/api-landscape/api-matrix.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'api-matrix', component: ApiMatrixComponent },
  { path: 'apis/:apiPathParameter', component: ApiDocumentationComponent },
  { path: '**', redirectTo: '' },
];
