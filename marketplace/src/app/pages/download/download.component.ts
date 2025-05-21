import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApiDownloadModel } from '@common/models/api-download.model';
import { TranslateModule } from '@ngx-translate/core';

type DownloadItem = {
  key: string;
  downloads: Download[];
};

type Download = {
  title: string;
  version: string;
  date: string;
  url: string;
};

@Component({
    selector: 'app-download',
    imports: [CommonModule, TranslateModule, NgOptimizedImage],
    templateUrl: './download.component.html',
    styleUrl: './download.component.scss'
})
export class DownloadComponent {
  @Input() input?: ApiDownloadModel | null;
  downloadContainers: DownloadItem[] = [];
}
