import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';
import { ProductList } from '../product-list/product-list/product-list';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  apiUrlCart= 'http://localhost:8080/api/v1/carrito';

  constructor(
    private http: HttpClient
  ) {}


  //get all cart
  getAllCart(): Observable<Cart[]>{
    return this.http.get<Cart[]>(this.apiUrlCart);
  }

  //get by id cart
  getByIdCart(id: number): Observable<Cart>{
    return this.http.get<Cart>(this.apiUrlCart);
  }

  // Añadir al carrito
  addCart(cart: { producto: { id: number }, cantidad: number }): Observable<any> {
    return this.http.post<any>(this.apiUrlCart, cart);
  }

// cart.service.ts
addMultipleCartItems(cartItems: { productoId: number, cantidad: number }[]): Observable<any> {
  return this.http.post<any>(this.apiUrlCart, { items: cartItems });
}

  //update cart
  updateCart(id: number, ditail: Cart): Observable<Cart>{

    const updatedUrl = `${this.apiUrlCart}/${id}`

    return this.http.put<Cart>(this.apiUrlCart, ditail);

  }

  //delete cart
  deleteCart(id: number): Observable<void>{

    const deletedCart = `${this.apiUrlCart}/${id}`;

    return this.http.delete<void>(deletedCart);

  }
}
