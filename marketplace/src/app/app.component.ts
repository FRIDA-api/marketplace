import {
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import {
  CommonModule,
  ViewportScroller,
  isPlatformBrowser,
} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FooterComponent } from './core/footer/footer.component';

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
  private viewportScroller = inject(ViewportScroller);

  scrollPosition = 0;

  ngOnInit() {
    fromEvent(this.el.nativeElement, 'scroll')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.scrollPosition = this.el.nativeElement.scrollTop;
      });
  }
  backToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);

    console.log(this.scrollPosition);
    window.scrollTo(0, 0);
  }
}
