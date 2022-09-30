import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'product/:id',component:ProductpageComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
