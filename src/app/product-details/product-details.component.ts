import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../interfaces/products';
import { ProductDetailsService } from '../services/product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {


  constructor( private activate : ActivatedRoute,private details : ProductDetailsService )
  {
    this.getProduct()
  }
  selectproducts:any;
  getProduct()
  {
    var id1 = this.activate.snapshot.params['id'];
    this.details.getDetails(id1).subscribe((response)=>{
      this.selectproducts = response;
      console.log(this.selectproducts)
    })
  }

}
