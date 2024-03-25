import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {InfosComponent} from "./components/infos/infos.component";
import {SobreNosComponent} from "./components/sobre-nos/sobre-nos.component";
import {ProdutosComponent} from "./components/produtos/produtos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, InfosComponent, SobreNosComponent, ProdutosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Site teste';
}
