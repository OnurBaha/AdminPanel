import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl : string ="https://projectapi.gerasim.in/api/";

  constructor(private http:HttpClient) { }

  getAllProducts() : Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.apiUrl}Products`);
  }
}
