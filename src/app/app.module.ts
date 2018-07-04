import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {ProductComponent} from './products/product.component';
import {ProductFilterPipe} from './products/product-filter.pipe';
import {StarComponent} from './shared/star/star.component';
import {ProductService} from './products/product.service';
import {ProductUpperPipe} from './products/product-upper.pipe';
import {OrderComponent} from './order/order.component';
import {HomeComponent} from './home/home.component';
import {NotfoundComponent} from './shared/notfound/notfound.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductFilterPipe,
    StarComponent,
    ProductUpperPipe,
    OrderComponent,
    HomeComponent,
    NotfoundComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule, CommonModule, FormsModule, HttpModule, RouterModule.forRoot([
      {path: 'products', component: ProductComponent},
      {path: 'products/:id', component: ProductDetailComponent},
      {path: 'orders', component: OrderComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: NotfoundComponent}
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
