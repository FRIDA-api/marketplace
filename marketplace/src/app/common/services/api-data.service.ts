import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiDetails} from "../../pages/home-page/home-page.component";

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
}
