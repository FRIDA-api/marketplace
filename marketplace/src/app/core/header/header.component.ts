import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnChanges {

  @Input() scrollPosition!: number;

  @ViewChild('header', {static: true}) el!: ElementRef;

  ngOnChanges() {
    if (this.scrollPosition === 0) {
      this.el.nativeElement.setAttribute('style', 'background-color: transparent');
    }

    if (this.scrollPosition > 0 && this.scrollPosition < 200) {
        this.el.nativeElement.setAttribute('style', `background-color: rgba(0, 0, 0, ${this.scrollPosition/200}`);
    }

    if (this.scrollPosition >= 200) {
        this.el.nativeElement.setAttribute('style', 'background-color: black');
    }
  }

}
