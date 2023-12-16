import { Routes } from '@angular/router';
import { ApiLandscapeComponent } from './api-landscape/api-landscape.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'api-landscape', component: ApiLandscapeComponent },
  { path: '**', redirectTo: '' },
];
