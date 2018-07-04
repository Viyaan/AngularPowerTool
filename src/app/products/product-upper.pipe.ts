import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productUpper'
})
export class ProductUpperPipe implements PipeTransform {

  transform(value: string) {
    value = value.toUpperCase();
    return value;
  }

}
