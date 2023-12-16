import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiInformationService {
  private http = inject(HttpService);
}
