import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(
    heroes: Hero[],
    sortBy?: keyof Hero | ''  // ordenar por
  ): Hero[] {

    switch (sortBy) {
      case 'name':
        // el necesita una funcion de comparacion
        return heroes.sort((a, b) => (a.name > b.name) ? 1 : -1)
      case 'canFly':
        // el necesita una funcion de comparacion
        return heroes.sort((a, b) => (a.canFly > b.canFly) ? 1 : -1)
      case 'color':
        // el necesita una funcion de comparacion
        return heroes.sort((a, b) => (a.color > b.color) ? 1 : -1)
      default: return heroes
    }
  }

}
