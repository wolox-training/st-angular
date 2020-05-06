import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filterText: string): any[] {
    if(filterText !== '') {
      return items.filter(item => item.title.toLowerCase().match(filterText.toLowerCase()) !== null);
    }
    return items;
  }

}
