import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items:Products[]= [];
  len:number=0;
  addToCart(product:any)
  {
    this.items.push(product);
    this.len++;
    // localStorage.setItem('items',JSON.stringify(this.items));
  }
  delete(item:any)
  {
    this.items.splice(item,1);
  }
  
}
