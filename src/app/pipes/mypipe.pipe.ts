import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe',
  standalone: true,
  pure:false
})
export class MypipePipe implements PipeTransform {

  transform(value:any){
    return value.join(',');
  }

}
