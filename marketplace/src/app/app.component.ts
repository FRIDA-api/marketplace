import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef, inject, OnInit,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
})
export class AppComponent implements OnInit {
  @ViewChild('main', { static: true }) el!: ElementRef;

  readonly translate = inject(TranslateService);

  scrollPosition = 0;

  ngOnInit(): void {
    this.translate.addLangs(['en', 'de']);
    const browserLang = this.translate.getBrowserLang() ?? 'de';
    this.translate.use(RegExp(/en|de/).exec(browserLang) ? browserLang : 'en');
  }

  backToTop() {
    this.el.nativeElement.scrollTop = 0;
  }
}
