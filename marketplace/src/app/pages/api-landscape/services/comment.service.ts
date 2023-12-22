import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommentModel} from "../models/comment.model";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private http = inject(HttpClient);

  private basePath = 'assets/data/';

  getApiDownloads() {
    return this.http.get<CommentModel[]>(this.basePath + 'api-comments.json', {
      responseType: 'json',
    });
  }
}
