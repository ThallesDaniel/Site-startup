import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-softwares',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './softwares.component.html',
  styleUrl: './softwares.component.css'
})
export class SoftwaresComponent {

}
