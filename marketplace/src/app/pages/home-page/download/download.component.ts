import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApiDownloadModel } from '@common/models/api-download.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [CommonModule, TranslateModule, NgOptimizedImage],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss',
})
export class DownloadComponent {
  @Input() input?: ApiDownloadModel | null;
}
