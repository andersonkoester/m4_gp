import { Component } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  templateUrl: 'orcamento.component.html',
  styleUrls: [ './orcamento.component.scss' ]
})

export class OrcamentoComponent {
  dataSource: ArrayStore;

  constructor() {}
}
