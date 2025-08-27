import { isPlatformBrowser, NgStyle } from '@angular/common';
import {
  Component,
  effect,
  ElementRef,
  inject,
  input,
  Input,
  NgZone,
  PLATFORM_ID, viewChild
} from '@angular/core';
import { ApiInformationModel } from '@common/models/api-information.model';
import { TranslateModule } from '@ngx-translate/core';
import SwaggerUI from 'swagger-ui';

@Component({
    selector: 'app-documentation-tab',
    imports: [TranslateModule, NgStyle],
    templateUrl: './documentation-tab.component.html',
    styleUrl: './documentation-tab.component.scss'
})
export class DocumentationTabComponent {
  @Input() apiInformation!: ApiInformationModel;
  isActive = input<boolean>();
  private readonly ngZone = inject(NgZone);
  swaggerUi = viewChild<ElementRef<HTMLDivElement>>('swaggerUi')

  private readonly platformId = inject(PLATFORM_ID);

  initializeApiDocumentation = effect(() => {
    this.ngZone.runOutsideAngular(() => {
    if (this.isActive()) {
      if (!isPlatformBrowser(this.platformId)) {
        console.log('Not supported for ssr renderd files');
        return;
      }
     SwaggerUI({
        url: this.apiInformation.swaggerPath,
        domNode: this.swaggerUi()?.nativeElement,
        deepLinking: false,
        defaultModelsExpandDepth: 4,
        defaultModelExpandDepth: 4,
        syntaxHighlight: {
          activate: true,
          theme: 'tomorrow-night',
        },
      });
    }})
  });
}
