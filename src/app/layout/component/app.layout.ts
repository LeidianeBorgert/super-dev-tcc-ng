import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppNavbar } from "./app.navbar";

@Component({
  selector: 'app-app.layout',
  imports: [RouterModule, AppNavbar],
  template: `
    <app-navbar/>
    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class AppLayout {

}
