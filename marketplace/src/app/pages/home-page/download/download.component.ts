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
};
@Component({
  selector: 'app-download',
  standalone: true,
  imports: [CommonModule, TranslateModule, NgOptimizedImage],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss',
})
export class DownloadComponent {
  @Input() input?: ApiDownloadModel | null;
  downloadContainers: DownloadItem[] = [
    {
      key: 'DATA_MODEL',
      downloads: [
        {
          title: 'test',
          version: '1.0',
          date: '12.04.2024',
        },
      ],
    },
    {
      key: 'EU_SUMMARY',
      downloads: [],
    },
    {
      key: 'USE_CASES_WHITEPAPER',
      downloads: [],
    },
    {
      key: 'USE_CASE_CREATION',
      downloads: [],
    },
  ];
}
