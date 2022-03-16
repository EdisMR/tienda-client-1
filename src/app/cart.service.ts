import { Injectable } from '@angular/core';
import { QueryProducts } from './query-products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products:QueryProducts[]=[]

  idaleatorio:string=this.randomProductID()
  nombre:string=""
  notas:string=""
  telefono:string=""
  total:string=""

  randomProductID():string {
    let tempData:any = new Date()
    tempData=(tempData.valueOf()).toString(36)
    console.log(tempData);
    return tempData
  }

  addToCart(input:QueryProducts){
    let repeted:boolean=false;
    this.products.forEach(elm=>{
      if(input.id==elm.id){
        repeted=true
        elm.cantidad=elm.cantidad+input.cantidad
      }
    })
    if(!repeted){
      this.products.push(input)
    }
  }

  constructor() {
  }
}
