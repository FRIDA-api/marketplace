import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { ApiDataService } from '@common/services/api-data.service';
import { Observable } from 'rxjs';
import { DownloadComponent } from "./download/download.component";

export interface ApiDetails {
  id: string;
  name: string;
  shortDescription: string;
  iconPath: string;
}

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [
        MatCardModule,
        CommonModule,
        MatDividerModule,
        NgOptimizedImage,
        RouterLink,
        DownloadComponent
    ]
})
export class HomePageComponent {
  private apiService = inject(ApiDataService);
  private apiInformationService = inject(ApiDataService);

  apiList$: Observable<ApiDetails[]> = this.apiService.getApiInformationData();
  pensionApi$ = this.apiInformationService.getApiDownloads('pension');
  healthCareApi$ = this.apiInformationService.getApiDownloads('healthcare');
  carclaimsApi$ = this.apiInformationService.getApiDownloads('carclaims');
  cyberApi$ = this.apiInformationService.getApiDownloads('cyber');
  documentApi$ = this.apiInformationService.getApiDownloads('document');
  buildingApi$ = this.apiInformationService.getApiDownloads('building');
}
