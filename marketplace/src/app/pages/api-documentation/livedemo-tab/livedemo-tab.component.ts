import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  input,
} from '@angular/core';
import { ApiInformationModel } from '@common/models/api-information.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-livedemo-tab',
    imports: [TranslateModule, NgOptimizedImage],
    templateUrl: './livedemo-tab.component.html',
    styleUrl: './livedemo-tab.component.scss'
})
export class LivedemoTabComponent {
  readonly apiInformation = input.required<ApiInformationModel>();
  isActive = input<boolean>();
}
