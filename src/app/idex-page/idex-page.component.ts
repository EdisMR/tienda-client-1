import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-idex-page',
  templateUrl: './idex-page.component.html',
  styleUrls: ['./idex-page.component.scss']
})
export class IdexPageComponent implements OnInit {

  allProd=this._productsSvc.allProducts;


  constructor(private _productsSvc:ProductsService) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.allProd=this._productsSvc.allProducts;
    },1000)
  }


}
