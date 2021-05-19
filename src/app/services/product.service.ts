import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _url: string  = '/api/products';

  constructor(
    private http: HttpClient
  ) {
    console.log('Servicio de producto');
   }

   getAll():Observable<any> {
    console.log(this._url);
     let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Headers', '*')
      .set('Access-Control-Allow-Methods', '*')
      .set('Allow', '*');
     return this.http.get<any>(`${this._url}`);
   }

   read(id: number):Observable<any> {
    return this.http.get<any>(`${this._url}/${id}`);
   }
   
}
