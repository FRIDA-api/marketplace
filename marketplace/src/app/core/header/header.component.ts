import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() scrollPosition!: number;
  @ViewChild('header', { static: true }) headerRef!: ElementRef;

  public translate = inject(TranslateService);

  ngOnInit(): void {
    this.translate.addLangs(['en', 'de']);
    const browserLang = this.translate.getBrowserLang() ?? 'de';
    this.translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
  }
  ngOnChanges() {
    if (this.scrollPosition === 0) {
      this.headerRef.nativeElement.setAttribute(
        'style',
        'background-color: transparent'
      );
    }

    if (this.scrollPosition > 0 && this.scrollPosition < 200) {
      this.headerRef.nativeElement.setAttribute(
        'style',
        `background-color: rgba(0, 0, 0, ${this.scrollPosition / 200}`
      );
    }

    if (this.scrollPosition >= 200) {
      this.headerRef.nativeElement.setAttribute(
        'style',
        'background-color: black'
      );
    }
  }
}
