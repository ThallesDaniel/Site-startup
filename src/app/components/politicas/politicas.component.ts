import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-politicas',
  standalone: true,
  imports: [],
  templateUrl: './politicas.component.html',
  styleUrl: './politicas.component.css'
})
export class PoliticasComponent implements OnInit {

  exibirBarra = true; // Controla a exibição da barra

  constructor() { }

  ngOnInit(): void {
    const consentimentoArmazenado = localStorage.getItem('aceitouPoliticaPrivacidade');
    if (consentimentoArmazenado === 'true') { // Verifica se já aceitou
      this.exibirBarra = false; // Oculta a barra se já aceitou
    }
  }

  fecharBarra() {
    this.exibirBarra = false; // Oculta a barra
    localStorage.setItem('aceitouPoliticaPrivacidade', 'true'); // Salva o consentimento
  }
}
