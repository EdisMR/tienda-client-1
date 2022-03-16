import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { CartService } from './cart.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(
    private _products:ProductsService,
    private _cart:CartService
    ){
    this._products.initialRequest()
    this._cart.randomProductID()
  }
}
