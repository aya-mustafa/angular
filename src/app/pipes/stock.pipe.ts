import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {

  color:boolean= false;
  transform(value:number): string {
    if(value !== 0)
    {
      return  "In stock";
    }
    else
    {
      return "out of stock";
    }
  }

}
