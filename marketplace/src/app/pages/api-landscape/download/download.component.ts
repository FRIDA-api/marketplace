import {Component, Input} from '@angular/core';
import {ApiDownloadModel} from "@common/models/api-download.model";

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss'
})
export class DownloadComponent {

  @Input() input?: ApiDownloadModel | null;

}
