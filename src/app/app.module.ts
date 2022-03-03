import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderItemsComponent } from './header-items/header-items.component';
import { IdexPageComponent } from './idex-page/idex-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ProductInfoComponent } from './product-info/product-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderItemsComponent,
    IdexPageComponent,
    DetailsPageComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
