import {Component, inject} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {MatDividerModule} from '@angular/material/divider';
import {ApiDataService} from "@common/services/api-data.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    MatDividerModule,
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  private apiService = inject(ApiDataService);

  apiList: ApiDetails[] = [];

  apiData = this.apiService.getApiInformationData().subscribe(apis => this.apiList = apis as ApiDetails[])
}

export interface ApiDetails {
  name: string;
  shortDescription: string;
  iconPath: string;
}
