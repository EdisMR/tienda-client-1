import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { IdexPageComponent } from './idex-page/idex-page.component';
import { ProductInfoComponent } from './product-info/product-info.component';

const routes: Routes = [
  {path:"",component:IdexPageComponent},
  {path:"detalles",component:DetailsPageComponent},
  {path:"id/:id",component:ProductInfoComponent},

  {path:"nosotros",component:AboutusComponent},
  {path:"**",component:ErrorpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
