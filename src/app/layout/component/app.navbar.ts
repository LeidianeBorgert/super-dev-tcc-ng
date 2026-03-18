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
        icon: 'pi pi-star',
        routerLink: "/pages/home"
      },
      {
        label: 'Ocorrências',
        icon: 'pi pi-search',
        routerLink: "/pages/ocorrencias"
      },
       {
        label: 'Fazer Login',
        icon: 'pi pi-user',
        routerLink: "/pages/login"
      },
        {
        label: 'Cadastre-se',
        icon: '',
        routerLink: "/pages/cadastro"
      },
    ]
  }
}
