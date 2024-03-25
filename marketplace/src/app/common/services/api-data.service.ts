import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiDownloadModel} from '@common/models/api-download.model';
import {environment} from "../../../environments/environment";
import {TagModel} from "@common/models/tag.model";
import {ApiInformationModel} from "@common/models/api-information.model";

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

  private http = inject(HttpClient);

  private basePath = 'assets/data/';

  getApiDocumentation(): Observable<CompanyInformation[]> {
    return this.http.get<CompanyInformation[]>(this.basePath + 'api-documentation.json', {
      responseType: 'json',
    });
  }

  getTagData() {
    return this.http.get<TagModel[]>(`${this.basePath}tag-information.json`, {
      responseType: "json"
    });
  }

  getApiInformationData() {
    return this.http.get<ApiInformationModel[]>(`${this.basePath}api-information.json`, {
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

  getLatestAsset(githubRepositoryName: string): Observable<any> {
    return this.http.get(
      `${environment.backendUrl}/releases/FRIDA-api/${githubRepositoryName}/assets/latest`,
      {
        responseType: "text",
      }
    )
  }

}
