import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
})
export class AppComponent {
  @ViewChild('main', { static: true }) el!: ElementRef;

  scrollPosition = 0;

  backToTop() {
    this.el.nativeElement.scrollTop = 0;
  }
}
