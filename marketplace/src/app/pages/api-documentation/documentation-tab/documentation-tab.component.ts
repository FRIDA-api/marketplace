import {Component, inject, Input, OnChanges, OnInit, PLATFORM_ID} from '@angular/core';
import {ApiDataService, CompanyInformation} from "@common/services/api-data.service";
import SwaggerUI from "swagger-ui";
import {Observable} from "rxjs";
import {DOCUMENT, isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-documentation-tab',
  standalone: true,
  imports: [],
  templateUrl: './documentation-tab.component.html',
  styleUrl: './documentation-tab.component.scss'
})
export class DocumentationTabComponent implements OnInit {

  @Input() api!: string;

  private document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly dataService = inject(ApiDataService);

  companyInformation$: Observable<CompanyInformation[]> = this.dataService.getApiDocumentation();

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      console.log("Not supported for ssr renderd files");
      return;
    }

    this.companyInformation$.subscribe(data => {
      const dataUrl = this.findMatchingApi(data, this.api);

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
