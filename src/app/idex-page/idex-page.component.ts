import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-idex-page',
  templateUrl: './idex-page.component.html',
  styleUrls: ['./idex-page.component.scss']
})
export class IdexPageComponent implements OnInit {

  allProd=this._productsSvc.allProducts;
  getAllProducts(){
    this.allProd=this._productsSvc.allProducts;
  }

  getImage(data:string){
    let tempArray=data.split(",");
    return `http://tienda.localhost/images/${tempArray[0]}`
  }

  navigateToProduct(dataID:string){
    this._router.navigate(['producto',dataID])
  }

  constructor(private _productsSvc:ProductsService,private _router:Router) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.getAllProducts()
    },1000)
  }


}