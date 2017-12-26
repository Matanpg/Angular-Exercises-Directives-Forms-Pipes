import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'censor',
})
export class CensorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(new RegExp(args, 'gi'), '***');
  }
}
