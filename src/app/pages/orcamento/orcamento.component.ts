import { Component } from '@angular/core';

export type DatagridValues = {
  text : string,
  value : string
}

export type DatagridValuesRecursos = {
  text : string,
  tasks : number,
  perHour : number,
  total : string
}

@Component({
  templateUrl: 'orcamento.component.html',
  styleUrls: [ './orcamento.component.scss' ]
})
export class OrcamentoComponent {

  public datasource : DatagridValues[] = [];
  public datasourceRecursos : DatagridValuesRecursos[] = [];

  constructor() {
    this.datasource = [
      {
        text : 'Horas consideradas/dia',
        value : '8'
      },
      {
        text : 'Total de horas estimadas',
        value : '300'
      },
      {
        text : 'Custo total estimado',
        value : 'R$ 21.800,00'
      }
    ]

    this.datasourceRecursos = [
      {
        text : 'Gerente de Projetos',
        tasks : 1,
        perHour : 35,
        total : 'R$ 3.640,00'
      },
      {
        text : 'Analista',
        tasks : 7,
        perHour : 30,
        total : 'R$ 4.080,00'
      },
      {
        text : 'Desenvolvedor 1',
        tasks : 6,
        perHour : 20,
        total : 'R$ 7.040,00'
      },
      {
        text : 'Desenvolvedor 2',
        tasks : 6,
        perHour : 20,
        total : 'R$ 7.040,00'
      }
    ]
  }
}
