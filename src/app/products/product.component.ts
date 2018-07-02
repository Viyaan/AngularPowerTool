import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';


@Component({
  selector: 'product-root',
  templateUrl: '../products/product.component.html',
  styleUrls: ['../products/product.component.css']
})



export class ProductComponent implements OnInit {
  title = '';
  showData = false;
  showImage = false;
  filterProduct = '';
  imageWidth = 100;
  products: IProduct[];
  errorMessage;

  constructor(private _productService: ProductService) {

  }

  ngOnInit(): void {
//    this.products = this._productService.getProductsHttp().subscribe((data) => this.products = data,
//      (error) => this.errorMessage = error);
    
    
    this.products = this._productService.getProductsNative();

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.title = "************Product List***********>>>>>>>>>" + message
  }

}
