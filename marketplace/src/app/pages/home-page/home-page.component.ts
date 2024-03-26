import { CommonModule, NgOptimizedImage } from '@angular/common';
import {Component, inject} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { ApiDataService } from '@common/services/api-data.service';
import { DownloadComponent } from "./download/download.component";
import {UseCaseCardComponent} from "./use-case-card/use-case-card.component";

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
    DownloadComponent,
    UseCaseCardComponent
  ]
})
export class HomePageComponent {
  private readonly apiService = inject(ApiDataService);
  private readonly apiInformationService = inject(ApiDataService);

  apiInformation$ = this.apiService.getApiInformationData();
  tagInformation$ = this.apiService.getTagData();


  pensionApi$ = this.apiInformationService.getApiDownloads('pension');
  healthCareApi$ = this.apiInformationService.getApiDownloads('healthcare');
  carclaimsApi$ = this.apiInformationService.getApiDownloads('carclaims');
  cyberApi$ = this.apiInformationService.getApiDownloads('cyber');
  documentApi$ = this.apiInformationService.getApiDownloads('document');
  buildingApi$ = this.apiInformationService.getApiDownloads('building');
}
