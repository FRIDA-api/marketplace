import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { DownloadComponent } from "./download/download.component";
import { UseCaseCardComponent } from "./use-case-card/use-case-card.component";
import { TranslateModule } from "@ngx-translate/core";
import {UseCaseApiService} from "@common/services/use-case-api.service";
import {TagsApiService} from "@common/services/tags-api.service";

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
  private readonly useCasesApi = inject(UseCaseApiService);
  private readonly tagsApi = inject(TagsApiService);

  apiInformation = this.useCasesApi.getUseCaseInformation();
  tagInformation = this.tagsApi.getTagInformation();

  addedValuesData: { pathToImage: string, translationReference: string }[] = [
    {
      pathToImage: "assets/icons/icon-rest-api.svg",
      translationReference: "HOMEPAGE.ADDED_VALUES_BOX_1",
    },
    {
      pathToImage: "assets/icons/icon-use-case.svg",
      translationReference: "HOMEPAGE.ADDED_VALUES_BOX_2",
    },
    {
      pathToImage: "assets/icons/icon-state-of-the-Art.svg",
      translationReference: "HOMEPAGE.ADDED_VALUES_BOX_3",
    },
    {
      pathToImage: "assets/icons/icon-api-dokumentation.svg",
      translationReference: "HOMEPAGE.ADDED_VALUES_BOX_4",
    }
  ];
}
