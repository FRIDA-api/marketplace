import {CommonModule, DOCUMENT, isPlatformBrowser, NgOptimizedImage} from '@angular/common';

import {
  Component,
  Input,
  OnChanges,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router, RouterModule } from '@angular/router';
import { ApiDataService, CompanyInformation } from '@common/services/api-data.service';
import { Observable } from 'rxjs';

import SwaggerUI from 'swagger-ui';
import {MatTabsModule} from "@angular/material/tabs";
import {OverviewTabComponent} from "./overview-tab/overview-tab.component";

@Component({
  selector: 'app-api-documentation',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, RouterModule, MatTabsModule, OverviewTabComponent, NgOptimizedImage],
  templateUrl: './api-documentation.component.html',
  styleUrl: './api-documentation.component.scss',
})
export class ApiDocumentationComponent implements OnChanges {

  //This parameter comes from the router path
  @Input() apiPathParameter: string | undefined;

  private document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly dataService = inject(ApiDataService);

  noApiFound: boolean = false;
  companyInformation$: Observable<CompanyInformation[]> = this.dataService.getApiDocumentation();

  selectApi(apiUrl: string) {
    this.router.navigateByUrl(`/api-explorer/${apiUrl}`);
  }

  ngOnChanges(): void {
    if (!isPlatformBrowser(this.platformId)) {
      console.log("Not supported for ssr renderd files");
      return;
    }

    this.companyInformation$.subscribe(data => {
      const dataUrl = this.findMatchingApi(data, this.apiPathParameter);
      if (dataUrl === "") {
        this.noApiFound = true;
        return;
      }

      this.noApiFound = false;
      SwaggerUI({
        url: dataUrl,
        domNode: this.document.getElementById('swagger-ui'),
        deepLinking: true,
        defaultModelsExpandDepth: 4,
        defaultModelExpandDepth: 4,
        syntaxHighlight: {
          activate: true,
          theme: 'tomorrow-night',
        },
      });
    })

  }

  public findMatchingApi(companyInformation: CompanyInformation[], apiPathParameter?: string) {
    for (const company of companyInformation) {
      for (const category of company.categories) {
        for (const api of category.apis) {
          if (api.url === apiPathParameter) {
            return api.dataUrl;
          }
        }
      }
    }
    return "";
  }
}
