import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import {AppComponent} from './app.component';
import {ProductComponent} from './products/product.component';
import {ProductFilterPipe} from './products/product-filter.pipe';
import {StarComponent} from './shared/star/star.component';
import {ProductService} from './products/product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductFilterPipe,
    StarComponent
  ],
  imports: [
    BrowserModule, CommonModule, FormsModule, HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
