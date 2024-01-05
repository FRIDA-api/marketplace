import {Component, inject} from "@angular/core";
import {AsyncPipe} from "@angular/common";
import {CommentComponent} from "./comment/comment.component";
import {DownloadComponent} from "./download/download.component";
import {ApiDataService} from "@common/services/api-data.service";
import {CommentService} from "./services/comment.service";

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
