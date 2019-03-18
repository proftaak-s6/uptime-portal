import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  api = 'future/api';

  constructor(private http: HttpClient) { }

  checkStatus(url: string): number {
    // return this.http.get(`${this.api}/${url}`);
    return 200;
  }
}
