import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main/main-page/main-page.component';
import { ItemsShopComponent } from './shop/items-shop/items-shop.component';

const routes: Routes = [
  { path: '', redirectTo: '/mainpage', pathMatch: 'full'},
  { path: 'mainpage', component: MainPageComponent},
  { path: 'shop', component: ItemsShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
