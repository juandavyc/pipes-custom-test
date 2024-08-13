import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'textos y flechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'numeros',
            icon: 'pi pi-dollar',
            routerLink: 'numbers',
          },
          {
            label: 'no comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon',
          }
        ]
      }, {
        label: 'Pipies personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'customs pipies',
            icon: 'pi pi-cog',
            // disabled: true,
            // badge: 'nto',
            routerLink:'custom'

            // items: [
            //   {
            //     // label: 'notro elemento 2',
            //     // icon: 'pi pi-cog',
            //     // items: [
            //     //   {
            //     //     label: 'notro elemento3',
            //     //     icon: 'pi pi-cog'
            //     //   }
            //     // ]
            //   }
            // ]
          }
        ]
      }
    ];
  }
}
