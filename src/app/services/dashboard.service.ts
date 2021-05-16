import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  _url = '/api/products/dashboards';


  constructor(private http:HttpClient) { }

  getAll():Observable<any> {
    return this.http.get(this._url);
  }

  load():Observable<any> {
    return this.http.get(`${this._url}/new`);
  }

  create():Observable<any>{
    return this.http.post(this._url, null);
  }

}
