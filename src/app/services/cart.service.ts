import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 
@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) {}
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  deleteItem(itemId){
    this.items.splice(itemId,1);
  }
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}