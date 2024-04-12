import {Component, effect, inject, input, Input, PLATFORM_ID} from '@angular/core';
import SwaggerUI from "swagger-ui";
import {DOCUMENT, isPlatformBrowser, NgStyle} from "@angular/common";
import {UseCaseApiService} from "@common/services/use-case-api.service";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-documentation-tab',
  standalone: true,
  imports: [
    TranslateModule,
    NgStyle
  ],
  templateUrl: './documentation-tab.component.html',
  styleUrl: './documentation-tab.component.scss'
})
export class DocumentationTabComponent {

  @Input() api!: string;
  isActive = input<boolean>();

  private document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly apiInformationService = inject(UseCaseApiService);

  apiInformation = this.apiInformationService.getUseCaseInformation();

  initializeApiDocumentation = effect(() => {
     if (this.isActive()) {
       if (!isPlatformBrowser(this.platformId)) {
         console.log("Not supported for ssr renderd files");
         return;
       }

       SwaggerUI({
         url: this.currentApiSwaggerPath(),
         domNode: this.document.getElementById('swagger-ui'),
         deepLinking: true,
         defaultModelsExpandDepth: 4,
         defaultModelExpandDepth: 4,
         syntaxHighlight: {
           activate: true,
           theme: 'tomorrow-night',
         },
       });
     }
  });

  currentApiSwaggerPath() {
    return this.apiInformation.find(api => api.id === this.api)?.swaggerPath
  }

  getGithubLink() {
    return this.apiInformation.find(api => api.id === this.api)?.githubLink
  }
}
