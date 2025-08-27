import {
  Component,
  inject,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive, TranslateModule, NgOptimizedImage],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

  readonly translate = inject(TranslateService);

  switchLanguage() {
    if (this.translate.currentLang === 'de') {
      this.translate.use('en');
    } else {
      this.translate.use('de');
    }
  }

}
