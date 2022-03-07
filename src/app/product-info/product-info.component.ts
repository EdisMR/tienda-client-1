import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: [
    "../../../node_modules/keen-slider/keen-slider.min.css",
    './product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  name: string = '';
  images:string[]=[]

  getImageURL(imageR:string){
    return `http://tienda.localhost/images/${imageR}`
  }

  getClass(item:number){
    return `keen-slider__slide number-slide${item+1}`
  }

/* ************************* */
/* ************************* */
/* ************************* */


  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

  slider?: KeenSliderInstance

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }


/* ************************* */
/* ************************* */
/* ************************* */


  constructor(
    private _activated: ActivatedRoute,
    private _products:ProductsService,
    ) {}

  ngOnInit(): void {
    this.name = this._activated.snapshot.params.id;

    let tempImages:string[]=[]
    this._products.allProducts.forEach(elm=>{
      if(elm.idaleatorio==this.name){
        tempImages=elm.imagenes.split(",")
      }
    })

    tempImages.forEach(elm=>{
      if(elm!=""){
        this.images.push(elm)
      }
    })



  }


}
