import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sobre-nos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre-nos.component.html',
  styleUrl: './sobre-nos.component.css'
})
export class SobreNosComponent {

  imagemequipe: string[] = ["../../../assets/equipe.png", "../../../assets/equipe2.png"];

}
