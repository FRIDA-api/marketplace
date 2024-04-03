import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { ApiDataService } from '@common/services/api-data.service';
import { DownloadComponent } from "./download/download.component";
import { UseCaseCardComponent } from "./use-case-card/use-case-card.component";
import { TranslateModule } from "@ngx-translate/core";

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
        UseCaseCardComponent,
        TranslateModule
    ]
})
export class HomePageComponent {
  private readonly apiService = inject(ApiDataService);

  apiInformation$ = this.apiService.getApiInformationData();
  tagInformation$ = this.apiService.getTagData();

  addedValuesData: { pathToImage: string, translationReference: string }[] = [
    {
      pathToImage: "assets/icons/icon-healthcareapi.svg",
      translationReference: "HOMEPAGE.ADDED_VALUES_BOX_1",
    },
    {
      pathToImage: "assets/icons/icon-healthcareapi.svg",
      translationReference: "HOMEPAGE.ADDED_VALUES_BOX_2",
    },
    {
      pathToImage: "assets/icons/icon-healthcareapi.svg",
      translationReference: "HOMEPAGE.ADDED_VALUES_BOX_3",
    },
    {
      pathToImage: "assets/icons/icon-healthcareapi.svg",
      translationReference: "HOMEPAGE.ADDED_VALUES_BOX_4",
    }
  ];
}
