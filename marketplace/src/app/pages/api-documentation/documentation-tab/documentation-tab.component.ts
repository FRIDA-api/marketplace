import {Component, effect, inject, input, Input, PLATFORM_ID} from '@angular/core';
import {ApiDataService, CompanyInformation} from "@common/services/api-data.service";
import SwaggerUI from "swagger-ui";
import {Observable} from "rxjs";
import {DOCUMENT, isPlatformBrowser} from "@angular/common";
import {UseCaseApiService} from "@common/services/use-case-api.service";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-documentation-tab',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './documentation-tab.component.html',
  styleUrl: './documentation-tab.component.scss'
})
export class DocumentationTabComponent {

  @Input() api!: string;
  isActive = input<boolean>();

  private document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly dataService = inject(ApiDataService);
  private readonly apiInformationService = inject(UseCaseApiService);

  companyInformation$: Observable<CompanyInformation[]> = this.dataService.getApiDocumentation();
  apiInformation = this.apiInformationService.getUseCaseInformation();

  initializeApiDocumentation = effect(() => {
     if (this.isActive()) {
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
  });

  private findMatchingApi(companyInformation: CompanyInformation[], apiPathParameter?: string) {
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

  getGithubLink() {
    return this.apiInformation.find(api => api.id === this.api)?.githubLink
  }
}
