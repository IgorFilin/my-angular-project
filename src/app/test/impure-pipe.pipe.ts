import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'impurePipe',
  // pure: false,
})
export class ImpurePipe implements PipeTransform {
  transform(array: any, start?: any, end?: any): any {
    return array.join(', ');
  }
}
