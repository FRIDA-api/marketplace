import {
  Component,
  effect,
  inject,
  input,
  Input,
  PLATFORM_ID,
} from '@angular/core';
import SwaggerUI from 'swagger-ui';
import { DOCUMENT, isPlatformBrowser, NgStyle } from '@angular/common';
import { UseCaseApiService } from '@common/services/use-case-api.service';
import { TranslateModule } from '@ngx-translate/core';
import { ApiInformationModel } from '@common/models/api-information.model';

@Component({
  selector: 'app-documentation-tab',
  standalone: true,
  imports: [TranslateModule, NgStyle],
  templateUrl: './documentation-tab.component.html',
  styleUrl: './documentation-tab.component.scss',
})
export class DocumentationTabComponent {
  @Input() apiInformation!: ApiInformationModel;
  isActive = input<boolean>();

  private document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  initializeApiDocumentation = effect(() => {
    if (this.isActive()) {
      if (!isPlatformBrowser(this.platformId)) {
        console.log('Not supported for ssr renderd files');
        return;
      }

      SwaggerUI({
        url: this.apiInformation.swaggerPath,
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
}
