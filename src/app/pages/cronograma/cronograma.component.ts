import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import dxGantt from 'devextreme/ui/gantt';

export class Task {
  id: number;
  parentId: number;
  title: string;
  start: Date;
  end: Date;
  progress: number;
}

@Component({
  templateUrl: 'cronograma.component.html',
  styleUrls: [ './cronograma.component.scss' ]
})
export class CronogramaComponent implements OnInit {

  tasks : Task[];
  resources : any[];

  constructor() {
    this.tasks = [
      {
        id: 1,
        parentId: -1,
        title: 'Gestão do Projeto',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
      },
      {
        id: 2,
        parentId: -1,
        title: 'Requisitos',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
      },
      {
        id: 3,
        parentId: 2,
        title: 'Levantamento de Requisitos',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
      },
      {
        id: 4,
        parentId: 2,
        title: 'Análise de Requisitos',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
      },
      {
        id: 5,
        parentId: 2,
        title: 'Documentação de Requisitos',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
      },
      {
        id: 6,
        parentId: -1,
        title: 'Desenvolvimento com Testes',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
      },
      {
        id: 7,
        parentId: 6,
        title: 'Desenvolvimento dos módulos',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
      },
      {
        id: 8,
        parentId: 6,
        title: 'Testes',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
      },
      {
        id: 9,
        parentId: -1,
        title: 'Correção de Erros',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
      },
      {
        id: 10,
        parentId: -1,
        title: 'Planejamento de Sprints',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
      },
      {
        id: 11,
        parentId: 10,
        title: 'Módulo de Administração',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
      },
      {
        id: 12,
        parentId: 10,
        title: 'Módulo de Produtos',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
      },
      {
        id: 13,
        parentId: 10,
        title: 'Módulo de Compras',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
      },
    ];

    this.resources = [
      {
        id: 1,
        text: 'Gerente de Projetos',
      },
      {
        id: 2,
        text: "Analista"
      },
      {
        id: 3,
        text: "Dev. 1"
      },
      {
        id: 4,
        text: "Dev. 2"
      }
    ];
  }

  ngOnInit(): void {}

  resourceAssignments = [{
    id: 1,
    taskId: 1,
    resourceId: 1,
  }];

  dependencies = [];

}
