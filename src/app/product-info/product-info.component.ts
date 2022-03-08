import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { ProductsService } from '../products.service';
import { environment } from 'src/environments/environment';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { ProductsResponse } from '../products-response';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: [
    '../../../node_modules/keen-slider/keen-slider.min.css',
    './product-info.component.scss',
  ],
})
export class ProductInfoComponent implements OnInit {
  name: string = '';
  images: string[] = [];
  product!:ProductsResponse;

  getImageURL(imageR: string) {
    return `${environment.mainURL}images/${imageR}`;
  }

  getClass(item: number) {
    return `keen-slider__slide number-slide${item + 1}`;
  }

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

  /* ************************* */
  /* ************************* */
  /* ************************* */

  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;

  slider?: KeenSliderInstance;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }

  /* ************************* */
  /* ************************* */
  /* ************************* */

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
