import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  _subscription:Subscription=this._products
  .getProducts().subscribe((data)=>{
    this._products.allProducts=data
    this._subscription.unsubscribe()
  })

  constructor(private _products:ProductsService){
  }
}
