import { Component, input } from '@angular/core';

@Component({
  selector: 'app-use-case-card',
  standalone: true,
  imports: [],
  templateUrl: './use-case-card.component.html',
  styleUrl: './use-case-card.component.scss'
})
export class UseCaseCardComponent {

  apiData = input.required<string>();

}
