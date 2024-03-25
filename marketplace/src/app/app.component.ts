import { CommonModule } from '@angular/common';
import {
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { fromEvent } from 'rxjs';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
})
export class AppComponent implements OnInit {
  @ViewChild('main', { static: true }) el!: ElementRef;

  private readonly destroyRef = inject(DestroyRef);

  scrollPosition = 0;

  ngOnInit() {
    fromEvent(this.el.nativeElement, 'scroll')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.scrollPosition = this.el.nativeElement.scrollTop;
      });
  }
  backToTop() {
    this.el.nativeElement.scrollTop = 0;
  }
}
