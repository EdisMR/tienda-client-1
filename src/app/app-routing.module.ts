import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page.component';
import { IdexPageComponent } from './idex-page/idex-page.component';
import { ProductInfoComponent } from './product-info/product-info.component';

const routes: Routes = [
  {path:"",component:IdexPageComponent},
  {path:"detalles",component:DetailsPageComponent},
  {path:"producto/:id",component:ProductInfoComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
