import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-api-status',
  standalone: true,
  imports: [],
  template: `<div class="baseCircle {{ apiStatus }}"></div>`,
  styleUrl: './api-status.component.scss',
})
export class ApiStatusComponent {
  @Input() apiStatus: 'isPlanned' | 'inDevelopment' | 'inProduction' =
    'isPlanned';
}
