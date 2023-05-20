import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http:HttpClient) { }
  getDetails(id:Number):Observable <any>
  {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
