import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  getItemName(item:string):string{
    let result:string=""
    this._products.allProducts.forEach(elm=>{
      if(elm.idaleatorio==item){
        result=elm.titulo
      }
    })
    return result
  }

  getImageURL(id:string):string{
    let result:string=""
    this._products.allProducts.forEach(elm=>{
      if(elm.idaleatorio==id){
        result=this._products.getProductImageURL(elm.imagenes)
      }
    })
    return result
  }

  deleteProduct(idName:string):void{
    this.cart.products=this.cart.products.filter(elm=>{
      return elm.id!=idName
    })
  }

  setItem(id:string,value:string){
    this.cart.products.forEach(elm=>{
      if(elm.id==id){
        elm.cantidad=parseInt(value)
      }
    })
  }

  gotoProduct(id:string){
    this._router.navigate(['/id',id])
  }

  getTotal():number{
    let result:number=0
    this.cart.products.forEach(elm=>{
      result+=(parseFloat(elm.valor))*elm.cantidad
    })
    return result
  }

  constructor(
    public _products:ProductsService,
    public cart:CartService,
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

}
