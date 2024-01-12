import { Routes } from '@angular/router';

import { ApiDocumentationComponent } from './pages/api-documentation/api-documentation.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DataModelComponent } from './pages/data-model/data-model.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'api-catalogue', component: HomePageComponent },
  { path: 'api-explorer', component: ApiDocumentationComponent },
  { path: 'api-explorer/:apiPathParameter', component: ApiDocumentationComponent },
  { path: 'data-model', component: DataModelComponent },
  { path: '**', redirectTo: '' },
];
