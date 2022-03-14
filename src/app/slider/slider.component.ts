import { Component, OnInit, OnDestroy, Input, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['../../../node_modules/keen-slider/keen-slider.min.css',
  './slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy{
  @Input() images:string[]=[];

  getClass(item: number) {
    return `keen-slider__slide number-slide${item + 1}`;
  }

  getImageURL(imageR: string) {
    return `${environment.mainURL}images/${imageR}`;
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

  constructor() { }

  ngOnInit(): void {
  }

}
