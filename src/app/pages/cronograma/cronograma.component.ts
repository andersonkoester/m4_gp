import { Component } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  templateUrl: 'cronograma.component.html',
  styleUrls: [ './cronograma.component.scss' ]
})

export class CronogramaComponent {
  dataSource: ArrayStore;

  constructor() {}
}
