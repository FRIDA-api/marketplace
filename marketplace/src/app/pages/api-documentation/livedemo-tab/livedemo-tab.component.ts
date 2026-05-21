import { isPlatformBrowser, NgOptimizedImage, NgStyle } from '@angular/common';
import {
  Component,
  effect,
  ElementRef,
  inject,
  input,
  NgZone,
  PLATFORM_ID, viewChild
} from '@angular/core';
import { ApiInformationModel } from '@common/models/api-information.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-livedemo-tab',
    imports: [TranslateModule, NgStyle, NgOptimizedImage],
    templateUrl: './livedemo-tab.component.html',
    styleUrl: './livedemo-tab.component.scss'
})
export class LivedemoTabComponent {
  readonly apiInformation = input.required<ApiInformationModel>();
  isActive = input<boolean>();
  private readonly ngZone = inject(NgZone);

  private readonly platformId = inject(PLATFORM_ID);

}
