import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UrlStatus {
  url: string;
  status: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  api = 'api/servers';

  constructor(private http: HttpClient) { }

  checkStatus(url: string): Observable<UrlStatus> {
    return this.http.get<UrlStatus>(`${this.api}?url=${url}`);
  }
}
