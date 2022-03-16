import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';
import { QueryProducts } from '../query-products';
@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  allProducts:QueryProducts[]=[]

  constructor(
    private _products:ProductsService,
    private _cart:CartService,
  ) { }

  ngOnInit(): void {
    this._cart.products.forEach(elm=>{
      this.allProducts.push(elm)
    })
  }

}
