import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(
    value: string, // el dato a transformar
    toUpper: boolean = false
  ): string {
    return (toUpper) ? value.toUpperCase() : value.toLowerCase();
  }

}
