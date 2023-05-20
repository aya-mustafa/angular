import { Component } from '@angular/core';
import { Products } from '../interfaces/products';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:Products[]=[];
  constructor(private router : Router,private product:CartService, private showProduct: ProductsService)
  {
  }

  getData()
  {
    this.showProduct.getData().subscribe((response)=>{
      this.products= response.products;

    })
  }

  getDetails(id:number)
  {
    this.router.navigate([`details/${id}`])
  }
  addtoCart(item:any)
  {
    this.product.addToCart(item);
  }
  ngOnInit()
  {
    this.getData();
  }
}

