import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategory } from '../product-category/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrlCategory = 'http://localhost:8080/api/v1/categoria'

  constructor(
    private http: HttpClient
  ){}

  getAllCategoria() : Observable<ProductCategory[]>{
    return this.http.get<ProductCategory[]>(this.apiUrlCategory)
  }
  
}
