import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { ProductsService } from '../products.service';
import { ProductsResponse } from '../products-response';
@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: [
    './product-info.component.scss',
  ],
})
export class ProductInfoComponent implements OnInit {
  name: string = '';
  images: string[] = [];
  product!:ProductsResponse;

  defineProduct() {
    this._products.allProducts.forEach((elm) => {
      if (elm.idaleatorio == this.name) {
        this.product=elm
      }
    });
  }

  defineImagesArray(){
    let tempImages: string[] = this.product.imagenes.split(",");
    tempImages.forEach(elm=>{
      if(elm!="")this.images.push(elm);
    })
  }

  constructor(
    private _activated: ActivatedRoute,
    private _products: ProductsService,
  ) {}

  ngOnInit(): void {
    this.name = this._activated.snapshot.params.id;

    if (this._products.allProducts.length == 0) {
      let subscription=this._products.
      getOneProduct(this.name).subscribe(data=>{
        this.product=data[0]
        this.defineImagesArray()
        subscription.unsubscribe()
      })
    }else{
      this.defineProduct()
      this.defineImagesArray()
    }
  }
}
