import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  _url: string = '/api/dashboards';
  


  constructor(private http:HttpClient) { }

  getAll():Observable<any> {
    const headers = new HttpHeaders({
      "Access-Control-Allow-Headers": "*"
    });
    return this.http.get<any>(this._url, { headers });
  }

  load():Observable<any> {
    const headers = new HttpHeaders({
      "Access-Control-Allow-Headers": "*"
    });
    return this.http.get(`${this._url}/new`, { headers });
  }

  create():Observable<any>{
    return this.http.post(this._url, null);
  }

}
