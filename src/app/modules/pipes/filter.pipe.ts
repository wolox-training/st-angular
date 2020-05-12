import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filterText: string): any[] {
    return filterText ? items.filter(item => this.matchTitle(item, filterText)) : items;
  }

  matchTitle(item, filterText: string) {
    return item.title.toLowerCase().match(filterText.toLowerCase()) !== null
  }

}
