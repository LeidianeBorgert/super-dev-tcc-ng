import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  imports: [Menubar],
  template: `
    <p-menubar [model]="items" />
  `,
  styles: ``,
})
export class AppNavbar {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: "/pages/dashboard"
      },
      {
        label: 'Bairros',
        icon: 'pi pi-star',
        routerLink: "/pages/bairros"
      },
      {
        label: 'Ocorrências',
        icon: 'pi pi-search',
        routerLink: "/pages/ocorrencias"
      },
    ]
  }
}
