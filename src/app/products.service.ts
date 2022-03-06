import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsResponse } from './products-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private getProductsURL:string = 'http://tienda.localhost/common-scripts/info-n-products.php';

  allProducts?:ProductsResponse[];

  getProducts():Observable<ProductsResponse[]>{
    return this.http.get<ProductsResponse[]>(this.getProductsURL)
  }

  constructor(private http: HttpClient) {}
}
