import { Routes } from '@angular/router';
import { ApiMatrixComponent } from './pages/api-landscape/api-matrix.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {DataModelComponent} from "./pages/data-model/data-model.component";

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'api-catalogue', component: HomePageComponent },
  { path: 'api-matrix', component: ApiMatrixComponent },
  { path: 'data-model', component: DataModelComponent },
  { path: '**', redirectTo: '' },
];
