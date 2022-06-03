import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import dxGantt from 'devextreme/ui/gantt';

export class Task {
  id: number;
  parentId: number;
  title: string;
  start: Date;
  end: Date;
  progress: number;
  taskColor: string;
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
        title: 'E-Commerce',
        start: new Date('05/30/2022'),
        end: new Date('06/04/2022'),
        progress: 0,
        taskColor: 'red'
      },
      {
        id: 2,
        parentId: 1,
        title: 'Gestão do Projeto',
        start: new Date('05/30/2022'),
        end: new Date('06/04/2022'),
        progress: 0,
        taskColor: 'red'
      },
      {
        id: 3,
        parentId: 1,
        title: 'Requisitos',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
        taskColor: 'red'
      },
      {
        id: 4,
        parentId: 3,
        title: 'Levantamento de Requisitos',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
        taskColor: 'red'
      },
      {
        id: 5,
        parentId: 3,
        title: 'Análise de Requisitos',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
        taskColor: 'red'
      },
      {
        id: 6,
        parentId: 3,
        title: 'Documentação de Requisitos',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
        taskColor: 'red'
      },
      {
        id: 7,
        parentId: 1,
        title: 'Desenvolvimento com Testes',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
        taskColor: 'red'
      },
      {
        id: 8,
        parentId: 7,
        title: 'Desenvolvimento dos módulos',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
        taskColor: 'red'
      },
      {
        id: 9,
        parentId: 7,
        title: 'Testes',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
        taskColor: 'red'
      },
      {
        id: 10,
        parentId: 1,
        title: 'Correção de Erros',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
        taskColor: 'red'
      },
      {
        id: 11,
        parentId: 1,
        title: 'Planejamento de Sprints',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
        taskColor: 'red'
      },
      {
        id: 12,
        parentId: 11,
        title: 'Módulo de Administração',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
        taskColor: 'red'
      },
      {
        id: 13,
        parentId: 11,
        title: 'Módulo de Produtos',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
        taskColor: 'red'
      },
      {
        id: 14,
        parentId: 11,
        title: 'Módulo de Compras',
        start: new Date('2022-05-30'),
        end: new Date('2022-06-04'),
        progress: 0,
        taskColor: 'red'
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
