import { Component, ElementRef, OnInit } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';

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
  styleUrls: ['./cronograma.component.scss'],
})
export class CronogramaComponent implements OnInit {
  tasksDataSource: ArrayStore;

  tasks: Task[];
  resources: any[];

  constructor() {
    this.tasks = [
      {
        id: 1,
        parentId: -1,
        title: 'E-Commerce'
      } as Task,
      {
        id: 2,
        parentId: 1,
        title: 'Gestão do Projeto'
      } as Task,
      {
        id: 3,
        parentId: 2,
        title: 'Gestão do Projeto',
        start: new Date('05/30/2022'),
        end: new Date('06/15/2022'),
        progress: 0,
        taskColor: '#1db2f5',
      },
      {
        id: 4,
        parentId: 1,
        title: 'Requisitos'
      } as Task,
      {
        id: 5,
        parentId: 4,
        title: 'Levantamento de Requisitos',
        start: new Date('06/10/2022'),
        end: new Date('06/16/2022'),
        progress: 0,
        taskColor: '#1db2f5',
      },
      {
        id: 6,
        parentId: 4,
        title: 'Análise de Requisitos',
        start: new Date('06/15/2022'),
        end: new Date('06/21/2022'),
        progress: 0,
        taskColor: '#1db2f5',
      },
      {
        id: 7,
        parentId: 4,
        title: 'Documentação de Requisitos',
        start: new Date('06/20/2022'),
        end: new Date('06/24/2022'),
        progress: 0,
        taskColor: '#1db2f5',
      },
      {
        id: 8,
        parentId: 1,
        title: 'Desenvolvimento com Testes'
      } as Task,
      {
        id: 9,
        parentId: 8,
        title: 'Desenvolvimento dos módulos',
        start: new Date('06/25/2022'),
        end: new Date('07/25/2022'),
        progress: 0,
        taskColor: '#1db2f5',
      },
      {
        id: 10,
        parentId: 8,
        title: 'Testes',
        start: new Date('07/20/2022'),
        end: new Date('07/31/2022'),
        progress: 0,
        taskColor: '#1db2f5',
      },
      {
        id: 11,
        parentId: 1,
        title: 'Correção de Erros'
      } as Task,
      {
        id: 12,
        parentId: 11,
        title: 'Correção de Erros',
        start: new Date('07/31/2022'),
        end: new Date('08/05/2022'),
        progress: 0,
        taskColor: '#1db2f5',
      },
      {
        id: 13,
        parentId: 1,
        title: 'Planejamento de Sprints'
      } as Task,
      {
        id: 14,
        parentId: 13,
        title: 'Módulo de Administração',
        start: new Date('06/25/2022'),
        end: new Date('06/27/2022'),
        progress: 0,
        taskColor: '#1db2f5',
      },
      {
        id: 15,
        parentId: 13,
        title: 'Módulo de Produtos',
        start: new Date('06/27/2022'),
        end: new Date('06/29/2022'),
        progress: 0,
        taskColor: '#1db2f5',
      },
      {
        id: 16,
        parentId: 13,
        title: 'Módulo de Compras',
        start: new Date('06/29/2022'),
        end: new Date('07/01/2022'),
        progress: 0,
        taskColor: '#1db2f5',
      },
    ];

    this.tasksDataSource = new ArrayStore({
      key: 'ID',
      data: this.tasks,
    });

    this.resources = [
      {
        id: 1,
        text: 'Gerente de Projetos',
      },
      {
        id: 2,
        text: 'Analista',
      },
      {
        id: 3,
        text: 'Dev. 1',
      },
      {
        id: 4,
        text: 'Dev. 2',
      },
    ];
  }

  ngOnInit(): void {}

  resourceAssignments = [
    {
      id: 1,
      taskId: 3,
      resourceId: 1,
    },
    {
      id: 3,
      taskId: 5,
      resourceId: 2,
    },
    {
      id: 4,
      taskId: 6,
      resourceId: 2,
    },
    {
      id: 5,
      taskId: 7,
      resourceId: 2,
    },
    {
      id: 7,
      taskId: 9,
      resourceId: 2,
    },
    {
      id: 8,
      taskId: 9,
      resourceId: 3,
    },
    {
      id: 9,
      taskId: 10,
      resourceId: 3,
    },
    {
      id: 10,
      taskId: 10,
      resourceId: 4,
    },
    {
      id: 11,
      taskId: 12,
      resourceId: 3,
    },
    {
      id: 12,
      taskId: 12,
      resourceId: 4,
    },
    {
      id: 13,
      taskId: 14,
      resourceId: 2,
    },
    {
      id: 14,
      taskId: 15,
      resourceId: 2,
    },
    {
      id: 15,
      taskId: 16,
      resourceId: 2,
    },
    {
      id: 16,
      taskId: 14,
      resourceId: 3,
    },
    {
      id: 17,
      taskId: 15,
      resourceId: 3,
    },
    {
      id: 18,
      taskId: 16,
      resourceId: 3,
    },
    {
      id: 19,
      taskId: 14,
      resourceId: 4,
    },
    {
      id: 20,
      taskId: 15,
      resourceId: 4,
    },
    {
      id: 21,
      taskId: 16,
      resourceId: 4,
    }
  ];

  dependencies = [];
}
