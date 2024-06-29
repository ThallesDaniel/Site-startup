import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {InfosComponent} from "../infos/infos.component";
import {SobreNosComponent} from "../sobre-nos/sobre-nos.component";
import {ProdutosComponent} from "../produtos/produtos.component";
import {FooterComponent} from "../footer/footer.component";
import {DepoimentosComponent} from "../depoimentos/depoimentos.component";
import {MapasComponent} from "../mapas/mapas.component";

@Component({
  selector: 'app-app-container',
  standalone: true,
  imports: [
    HeaderComponent,
    InfosComponent,
    SobreNosComponent,
    ProdutosComponent,
    FooterComponent,
    DepoimentosComponent,
    MapasComponent
  ],
  templateUrl: './app-container.component.html',
  styleUrl: './app-container.component.css'
})
export class AppContainerComponent {

}
