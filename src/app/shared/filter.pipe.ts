//Additional way to search products
import { Pipe, PipeTransform } from '@angular/core';
import { ProductsInterface } from '../core/interfaces';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  constructor(){}

  transform(value: ProductsInterface[], filterString: string, propName: string, filteredArray: ProductsInterface[]): ProductsInterface[]{
    const result: ProductsInterface[] = [];
    if(!value || filterString === '' || propName === '') {
      return value
    }
    value.forEach((a:any)=> {
      if (a[propName].trim().toLowerCase().includes(filterString.toLowerCase())) {
        result.push(a);
      }
    })
    return filteredArray = result;
  }

}
