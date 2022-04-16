import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsResponse } from './products-response';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private getProductsURL:string = `${environment.mainURL}/apiv2/product/`;

  allProducts:ProductsResponse[]=[]
  productsSubsciption!:Subscription

  getProducts():Observable<ProductsResponse[]>{
    return this.http.get<ProductsResponse[]>(this.getProductsURL)
  }

  getOneProduct(id:string):Observable<any>{
    return this.http.get<any>(`${this.getProductsURL}`,{
      params:{
        id:id,
      }
    })
  }

  initialRequest(){
      this.productsSubsciption=this.getProducts().subscribe(data=>{
        this.allProducts=data
        this.productsSubsciption.unsubscribe()
      })
  }

  getProductImageURL(data:string){
    let tempArray=data.split(",");
    return `${environment.mainURL}/images/${tempArray[0]}`
  }

  constructor(private http: HttpClient) {}
}
