import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html',
  standalone: true
})
export class AppContainerComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Obter o nome do componente da rota ativa
    const componentName = this.activatedRoute.snapshot.data['componentName'];

    // Carregar o componente dinamicamente
    const component = import(`./${componentName}`).then((m) => m[componentName]);
  }
}
