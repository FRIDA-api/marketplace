import { Routes } from '@angular/router';

import { ApiDocumentationComponent } from './pages/api-documentation/api-documentation.component';
import { ApiMatrixComponent } from './pages/api-landscape/api-matrix.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DataModelComponent } from './pages/data-model/data-model.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'api-catalogue', component: HomePageComponent },
  { path: 'api-matrix', component: ApiMatrixComponent },
  { path: 'apis/:apiPathParameter', component: ApiDocumentationComponent },
  { path: 'data-model', component: DataModelComponent },
  { path: '**', redirectTo: '' },
];
