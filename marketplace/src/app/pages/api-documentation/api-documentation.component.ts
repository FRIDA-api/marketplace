import {CommonModule, DOCUMENT, isPlatformBrowser, NgOptimizedImage} from '@angular/common';

import {
  Component,
  Input,
  OnChanges,
  PLATFORM_ID,
  inject, SimpleChanges,
} from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router, RouterModule } from '@angular/router';
import { ApiDataService, CompanyInformation } from '@common/services/api-data.service';
import { Observable } from 'rxjs';

import SwaggerUI from 'swagger-ui';
import {MatTabsModule} from "@angular/material/tabs";
import {OverviewTabComponent} from "./overview-tab/overview-tab.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-api-documentation',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, RouterModule, MatTabsModule, OverviewTabComponent, NgOptimizedImage, TranslateModule],
  templateUrl: './api-documentation.component.html',
  styleUrl: './api-documentation.component.scss',
})
export class ApiDocumentationComponent implements OnChanges {

  //This parameter comes from the router path
  @Input() apiPathParameter: string | undefined;

  ngOnChanges(changes: SimpleChanges) {

  }

  getApiName(): string {
    switch(this.apiPathParameter) {
      case "pension-api": return "PENSION_API"
      case "car-claims-api": return "CAR_CLAIMS_API"
      case "real-estate-api": return "REAL_ESTATE_API"
      case "health-care-api": return "HEALTH_CARE_API"
      case "digital-documents-api": return "DIGITAL_DOCUMENTS_API"
      case "cyber-api": return "CYBER_API"
      default: return ""
    }
  }

  getIconPath(): string {
    const iconBasePath = "./assets/icons/icon-"
    switch(this.apiPathParameter) {
      case "pension-api": return iconBasePath + "pensionapi.svg"
      case "car-claims-api": return iconBasePath + "carclaimsapi.svg"
      case "real-estate-api": return iconBasePath + "realestateapi.svg"
      case "health-care-api": return iconBasePath + "healthcareapi.svg"
      case "digital-documents-api": return iconBasePath + "digitaldocumentsapi.svg"
      case "cyber-api": return iconBasePath + "cyberapi.svg"
      default: return ""
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
