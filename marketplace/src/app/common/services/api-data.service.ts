import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MonoTypeOperatorFunction, Observable } from 'rxjs';
import { ApiDownloadModel } from '@common/models/api-download.model';

export type Api = {
  name: string;
  url: string;
  dataUrl: string;
};

export type Category = {
  categoryName: string;
  apis: Api[];
};

export type CompanyInformation = {
  companyName: string;
  pathToIcon: string;
  categories: Category[];
};

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  pipe(arg0: MonoTypeOperatorFunction<unknown>) {
    throw new Error('Method not implemented.');
  }
  private http = inject(HttpClient);

  private basePath = 'assets/data/';

  getApiDocumentation() {
    return this.http.get<CompanyInformation[]>(this.basePath + 'api-documentation.json', {
      responseType: 'json',
    });
  }

  getApiInformationData(): Observable<any> {
    return this.http.get(this.basePath + 'api-information.json', {
      responseType: 'json',
    });
  }

  getApiDownloads(apiName: string) {
    return this.http.get<ApiDownloadModel[]>(
      `${this.basePath}api-${apiName}-download.json`,
      {
        responseType: 'json',
      },
    );
  }
}
