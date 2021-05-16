import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _url = '/api/products';

  constructor(
    private http: HttpClient
  ) {
    console.log('Servicio de producto');
   }

   getAll():Observable<any> {
     return this.http.get(this._url);
   }

   read(id: number):Observable<any> {
    return this.http.get(`${this._url}/${id}`);
   }
   
}
