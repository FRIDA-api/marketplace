import {Component, inject} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {ApiDataService} from "@common/services/api-data.service";
import {CommentService} from "../api-landscape/services/comment.service";
import {CommentComponent} from "../api-landscape/comment/comment.component";
import {DownloadComponent} from "../api-landscape/download/download.component";

@Component({
  selector: 'app-data-model',
  standalone: true,
  imports: [
    AsyncPipe,
    CommentComponent,
    DownloadComponent
  ],
  templateUrl: './data-model.component.html',
  styleUrl: './data-model.component.scss'
})
export class DataModelComponent {
  private apiInformationService = inject(ApiDataService);
  private apiCommentService = inject(CommentService);

  downloadApi$ = this.apiInformationService.getApiDownloads();
  commentApi$ = this.apiCommentService.getApiDownloads();
}
