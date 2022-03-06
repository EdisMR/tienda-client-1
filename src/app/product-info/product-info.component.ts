import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  name:string=""

  constructor(private _router:Router,private _activated:ActivatedRoute) { }

  ngOnInit(): void {
      this.name=this._activated.snapshot.params.id
  }

}
