import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { ProductsService } from '../products.service';
import { ProductsResponse } from '../products-response';
import { CartService } from '../cart.service';
import { QueryProducts } from '../query-products';
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

  productDetails:QueryProducts={
    id:"",
    cantidad:1,
    valor:""
  }

  sent:boolean=false

  addNewProduct():void{
    this._cart.addToCart(this.productDetails)
    this.sent=true
  }

  setHowMany(input:string):void{
    this.productDetails.cantidad=parseInt(input)
  }

  setProduct() {
    this._products.allProducts.forEach((elm) => {
      if (elm.idaleatorio == this.name) {
        this.product=elm
      }
    });
  }

  setImagesArray(){
    let tempImages: string[] = this.product.imagenes.split(",");
    tempImages.forEach(elm=>{
      if(elm!="")this.images.push(elm);
    })
  }

  setMainProductDetails():void{
    this.productDetails.id=this.product.idaleatorio
    this.productDetails.valor=this.product.valor

    this._cart.products.forEach(elm=>{
      if(elm.id==this.product.idaleatorio){
        this.sent=true
      }
    })
  }

  constructor(
    private _activated: ActivatedRoute,
    private _products: ProductsService,
    private _cart:CartService
  ) {}

  ngOnInit(): void {
    this.name = this._activated.snapshot.params.id;

    if (this._products.allProducts.length == 0) {
      let subscription=this._products.
      getOneProduct(this.name).subscribe(data=>{
        this.product=data[0]
        this.setImagesArray()
        this.setMainProductDetails()
        subscription.unsubscribe()
      })
    }else{
      this.setProduct()
      this.setImagesArray()
      this.setMainProductDetails()
    }
  }
}
