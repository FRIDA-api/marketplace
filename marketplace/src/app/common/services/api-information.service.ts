import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiInformationService {
  private http = inject(HttpClient);

  getApiMatrixData(): Observable<any> {
    return this.http.get('assets/api-matrix');
  }
}
