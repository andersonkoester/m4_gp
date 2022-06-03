import { Component } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  templateUrl: 'eap.component.html',
  styleUrls: [ './eap.component.scss' ]
})

export class EAPComponent {
  dataSource: ArrayStore;

  constructor() {
    this.dataSource = new ArrayStore({
      key: 'ID',
      data: [
      {
        Title: 'E-Commerce',
        Items: [
          {
            Title: 'Gestão do Projeto'
          },
          {
            Title: 'Requisitos',
            Items : [
              {
                Title: 'Levantamento de Requisitos',
              },
              {
                Title: 'Análise de Requisitos',
              },
              {
                Title: 'Documentação de Requisitos',
              }
            ]
          },
          {
            Title: 'Desenvolvimento com Testes',
            Items : [
              {
                Title: 'Desenvolvimento dos módulos',
              },
              {
                Title: 'Testes',
              }
            ]
          },
          {
            Title: 'Correção de Erros'
          },
          {
            Title: 'Planejamento de Sprints',
            Items : [
              {
                Title: 'Módulo de Administração',
              },
              {
                Title: 'Módulo de Produtos',
              },
              {
                Title: 'Módulo de Compras',
              }
            ]
          }
        ]
      }
    ]
    });
  }
}
