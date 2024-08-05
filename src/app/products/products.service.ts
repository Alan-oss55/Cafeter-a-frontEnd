import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategory } from '../product-category/product-category';
import { ProductList } from '../product-list/product-list/product-list';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrlCategory = 'http://localhost:8080/api/v1/categoria'
  apiUrlProduct = 'http://localhost:8080/api/v1/productos'

  constructor(
    private http: HttpClient
  ){}

  getAllCategoria() : Observable<ProductCategory[]>{
    return this.http.get<ProductCategory[]>(this.apiUrlCategory)
  }

  // getProductos() {
  //   return
  // }

  getProducts() : Observable<ProductList[]> {
    return this.http.get<ProductList[]>(this.apiUrlProduct)
  }
  
}
