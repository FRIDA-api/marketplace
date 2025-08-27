import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  viewChild
} from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
    ]
})
export class AppComponent implements OnInit, OnDestroy {
  readonly el = viewChild.required<ElementRef>('top');
  readonly skipMainContent = viewChild.required<ElementRef>('skipMainContent');

  readonly translate = inject(TranslateService);
  readonly router = inject(Router);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  private subs = new Subscription();
  scrollPosition = 0;

  ngOnInit(): void {
    this.subs.add(
      this.translate.onLangChange.subscribe((event) => {
        if (isPlatformBrowser(this.platformId)) {
          this.renderer.setAttribute(
            document.documentElement,
            'lang',
            event.lang
          );
        }
      })
    );

    this.translate.addLangs(['en', 'de']);
    const browserLang = this.translate.getBrowserLang() ?? 'de';
    this.translate.use(RegExp(/en|de/).exec(browserLang) ? browserLang : 'en');
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  skipToMainContent() {
    this.skipMainContent().nativeElement.focus();
  }

  backToTop() {
    this.el().nativeElement.scrollTop = 0;
  }
}
