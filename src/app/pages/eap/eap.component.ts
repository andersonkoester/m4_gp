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
            Title: 'Gestão do Projeto',
            Items : [
              {
                Title: 'Planejamento',
              }
            ]
          },
          {
            Title: 'Requisitos',
            Items : [
              {
                Title: 'Software',
              },
              {
                Title: 'Documentação do Usuário',
              },
              {
                Title: 'Análise de Requisitos',
              }
            ]
          },
          {
            Title: 'Desenvolvimento com Testes',
            Items : [
              {
                Title: 'Demanda de Desenvolvimento',
              },
              {
                Title: 'Teste de Desenvolvimento',
              },
              {
                Title: 'Teste Operacional',
              }
            ]
          },
          {
            Title: 'Correção de Erros',
            Items : [
              {
                Title: 'Estimativa de resolução',
              },
              {
                Title: 'Relatório do erro',
              },
              {
                Title: 'Relatório de correção',
              }
            ]
          },
          {
            Title: 'Planejamento de Sprints',
            Items : [
              {
                Title: 'Planejamento',
              },
              {
                Title: 'Implementação',
              },
              {
                Title: 'Revisão',
              },
              {
                Title: 'Retrospectiva',
              },
              {
                Title: 'Lançamento',
              }
            ]
          }
        ]
      }
    ]
    });
  }
}
