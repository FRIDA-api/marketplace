import {CommonModule, isPlatformBrowser} from '@angular/common';
import {
  Component,
  ElementRef, Inject, inject, OnInit, PLATFORM_ID, Renderer2,
  ViewChild,
} from '@angular/core';
import { Router, RouterLink, RouterOutlet} from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, RouterLink],
})
export class AppComponent implements OnInit {
  @ViewChild('top', { static: true }) el!: ElementRef;

  readonly translate = inject(TranslateService);
  readonly router = inject(Router);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  scrollPosition = 0;
  skipToNavigation = `${this.router.url}#nav`;
  skipToMain = `${this.router.url}#main`;

  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event) => {
      if (isPlatformBrowser(this.platformId)) {
        this.renderer.setAttribute(document.documentElement, 'lang', event.lang);
      }
    });

    this.translate.addLangs(['en', 'de']);
    const browserLang = this.translate.getBrowserLang() ?? 'de';
    this.translate.use(RegExp(/en|de/).exec(browserLang) ? browserLang : 'en');
  }

  backToTop() {
    this.el.nativeElement.scrollTop = 0;
  }
}
