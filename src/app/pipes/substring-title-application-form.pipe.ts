import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substringTitleApplicationForm'
})
export class SubstringTitleApplicationFormPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    const currentWidth = window.innerWidth;
    let result = '';
    if(currentWidth == 320){
      result = value.substring(0, 3) + '...';
    }
    else{
      if(currentWidth <= 375){
        if(value.length > 10){
          result = value.substring(0, 10) + '...';
        }
        else{
          result = value;
        }
      }
      else{
        if(currentWidth <= 412){
          if(value.length > 15){
            result = value.substring(0, 15) + '...';
          }
          else{
            result = value;
          }
        }
        else{
          result = value;
        }
      }
    }
    return result;
  }

}
