import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiDownloadModel} from "@common/models/api-download.model";

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  private http = inject(HttpClient);

  private basePath = 'assets/data/';

  getApiMatrixData(): Observable<any> {
    return this.http.get(this.basePath + 'api-matrix.json', {
      responseType: 'json',
    });
  }

  getApiInformationData(): Observable<any> {
    return this.http.get(this.basePath + 'api-information.json', {
      responseType: 'json',
    });
  }

  getApiDownloads() {
    return this.http.get<ApiDownloadModel[]>(this.basePath + 'api-download.json', {
      responseType: 'json',
    });
  }
}
