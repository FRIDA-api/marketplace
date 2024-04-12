import {CommonModule, NgOptimizedImage} from '@angular/common';

import {
  Component,
  Input,
  inject, OnInit,
} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {RouterModule} from '@angular/router';
import {ApiDataService} from '@common/services/api-data.service';

import {MatTabChangeEvent, MatTabsModule} from "@angular/material/tabs";
import {OverviewTabComponent} from "./overview-tab/overview-tab.component";
import {TranslateModule} from "@ngx-translate/core";
import {TagModel} from "@common/models/tag.model";
import {map, of, switchMap} from "rxjs";
import {DocumentationTabComponent} from "./documentation-tab/documentation-tab.component";

@Component({
  selector: 'app-api-documentation',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, RouterModule, MatTabsModule, OverviewTabComponent, NgOptimizedImage, TranslateModule, DocumentationTabComponent],
  templateUrl: './api-documentation.component.html',
  styleUrl: './api-documentation.component.scss',
})
export class ApiDocumentationComponent implements OnInit {
  private readonly apiService = inject(ApiDataService);

  //This parameter comes from the router path
  @Input() apiPathParameter: string | undefined;

  apiInformation$ = this.apiService.getApiInformationData()
  tagData$ = this.apiService.getTagData()
  tags$ = of<TagModel[]>([]);

  isApiDocumentationTabActive = false;

  ngOnInit(): void {
    this.tags$ = this.apiInformation$.pipe(
      map(apiInfos => {
        const apiInfo = apiInfos.find(info => info.id === this.apiPathParameter);
        if (apiInfo) {
          return apiInfo.tags;
        } else {
          throw new Error('API Information nicht gefunden');
        }
      }),
      switchMap(tags => {
        return this.tagData$.pipe(
          map(allTags => allTags.filter(tag => tags.includes(tag.tagId)))
        );
      })
    );
  }

  onTabChange(event: MatTabChangeEvent) {
    this.isApiDocumentationTabActive = event.index === 1;
  }

  getApiName(): string {
    switch (this.apiPathParameter) {
      case "pension-api":
        return "PENSION_API"
      case "car-claims-api":
        return "CAR_CLAIMS_API"
      case "real-estate-api":
        return "REAL_ESTATE_API"
      case "health-care-api":
        return "HEALTH_CARE_API"
      case "digital-documents-api":
        return "DIGITAL_DOCUMENTS_API"
      case "cyber-api":
        return "CYBER_API"
      default:
        return ""
    }
  }

  getIconPath(): string {
    const iconBasePath = "./assets/icons/icon-"
    switch (this.apiPathParameter) {
      case "pension-api":
        return iconBasePath + "pensionapi.svg"
      case "car-claims-api":
        return iconBasePath + "carclaimsapi.svg"
      case "real-estate-api":
        return iconBasePath + "realestateapi.svg"
      case "health-care-api":
        return iconBasePath + "healthcareapi.svg"
      case "digital-documents-api":
        return iconBasePath + "digitaldocumentsapi.svg"
      case "cyber-api":
        return iconBasePath + "cyberapi.svg"
      default:
        return ""
    }
  }

  // private document = inject(DOCUMENT);
  // private readonly router = inject(Router);
  // private readonly platformId = inject(PLATFORM_ID);
  // private readonly dataService = inject(ApiDataService);
  //
  // noApiFound: boolean = false;
  // companyInformation$: Observable<CompanyInformation[]> = this.dataService.getApiDocumentation();
  //
  // selectApi(apiUrl: string) {
  //   this.router.navigateByUrl(`/api-explorer/${apiUrl}`);
  // }
  //
  // ngOnChanges(): void {
  //   if (!isPlatformBrowser(this.platformId)) {
  //     console.log("Not supported for ssr renderd files");
  //     return;
  //   }
  //
  //   this.companyInformation$.subscribe(data => {
  //     const dataUrl = this.findMatchingApi(data, this.apiPathParameter);
  //     if (dataUrl === "") {
  //       this.noApiFound = true;
  //       return;
  //     }
  //
  //     this.noApiFound = false;
  //     SwaggerUI({
  //       url: dataUrl,
  //       domNode: this.document.getElementById('swagger-ui'),
  //       deepLinking: true,
  //       defaultModelsExpandDepth: 4,
  //       defaultModelExpandDepth: 4,
  //       syntaxHighlight: {
  //         activate: true,
  //         theme: 'tomorrow-night',
  //       },
  //     });
  //   })
  //
  // }
  //
  // public findMatchingApi(companyInformation: CompanyInformation[], apiPathParameter?: string) {
  //   for (const company of companyInformation) {
  //     for (const category of company.categories) {
  //       for (const api of category.apis) {
  //         if (api.url === apiPathParameter) {
  //           return api.dataUrl;
  //         }
  //       }
  //     }
  //   }
  //   return "";
  // }
}
