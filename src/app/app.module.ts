import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderItemsComponent } from './header-items/header-items.component';
import { IdexPageComponent } from './idex-page/idex-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductsService } from './products.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { SliderComponent } from './slider/slider.component';
import { CartService } from './cart.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderItemsComponent,
    IdexPageComponent,
    DetailsPageComponent,
    ProductInfoComponent,
    AboutusComponent,
    ErrorpageComponent,
    SliderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ProductsService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
