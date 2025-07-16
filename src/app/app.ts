import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./componentes/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html'
})
export class App {
[x: string]: any;
  protected title = 'gestorStock-app';
}
