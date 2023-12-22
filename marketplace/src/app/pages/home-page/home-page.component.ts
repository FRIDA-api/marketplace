import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { ApiDataService } from '@common/services/api-data.service';
import { Observable } from 'rxjs';

export interface ApiDetails {
  name: string;
  shortDescription: string;
  iconPath: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatDividerModule,
    NgOptimizedImage,
    RouterLink,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  private apiService = inject(ApiDataService);
  apiList$: Observable<ApiDetails[]> = this.apiService.getApiInformationData();
}
