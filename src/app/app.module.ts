import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';



import {OrderComponent} from './order/order.component';
import {HomeComponent} from './home/home.component';
import {NotfoundComponent} from './shared/notfound/notfound.component';
import {ProductModule} from './products/product.module';


@NgModule({
  declarations: [
    AppComponent,

  
    OrderComponent,
    HomeComponent,
    NotfoundComponent,
   
  ],
  imports: [
    BrowserModule, CommonModule, FormsModule, HttpModule,ProductModule, RouterModule.forRoot([

      {path: 'orders', component: OrderComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: NotfoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
