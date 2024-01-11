import { Component, DestroyRef, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/header/header.component";
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HeaderComponent]
})
export class AppComponent implements OnInit {

    @ViewChild('main', {static: true}) el!: ElementRef;

    private readonly destroyRef = inject(DestroyRef);

    scrollPostion = 0;
  
    ngOnInit() {
      fromEvent(this.el.nativeElement, 'scroll').pipe(
        takeUntilDestroyed(this.destroyRef)
      ).subscribe((_) => {
        this.scrollPostion = this.el.nativeElement.scrollTop;
      })
    }

}
