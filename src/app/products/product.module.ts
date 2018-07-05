import {NgModule} from '@angular/core';
import {ProductComponent} from './product.component';
import {ProductFilterPipe} from './product-filter.pipe';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductUpperPipe} from './product-upper.pipe';
import {ProductService} from './product.service';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ProductGaurds} from './product.guards';

@NgModule({

  declarations: [ProductComponent,
    ProductFilterPipe, ProductDetailComponent, ProductUpperPipe],
  
  
  imports: [SharedModule, RouterModule.forChild([
    {path: 'products', component: ProductComponent},
    {path: 'products/:id', canActivate:[ProductGaurds], component: ProductDetailComponent}

  ])],
  
  providers: [ProductService,ProductGaurds]
})

export class ProductModule {}