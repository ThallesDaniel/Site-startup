import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'app-politica-priv',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './politica-priv.component.html',
  styleUrl: './politica-priv.component.css'
})
export class PoliticaPrivComponent {

}
