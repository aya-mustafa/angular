import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Products } from '../interfaces/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {


  constructor(private cart: CartService)
  {
  }

  items = this.cart.items;
  deleteItem(item:any)
  {
    this.cart.delete(item)
  }
}
