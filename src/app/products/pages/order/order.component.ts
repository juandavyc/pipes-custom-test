import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {


  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'SuperMan',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'IronMan',
      canFly: true,
      color: Color.red,
    },
    {
      name: 'BatMan',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'AquaMan',
      canFly: false,
      color: Color.gray,
    }
  ];

  public isUpperCase: boolean = false;

  toogleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero):void{
    this.orderBy = value;
  }
}
