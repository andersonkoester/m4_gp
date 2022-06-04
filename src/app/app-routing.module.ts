import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DxDataGridModule, DxDiagramModule, DxGanttModule } from 'devextreme-angular';
import { EAPComponent } from './pages/eap/eap.component';
import { CronogramaComponent } from './pages/cronograma/cronograma.component';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';

const routes: Routes = [
 {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'eap',
    component: EAPComponent
  },
  {
    path: 'cronograma',
    component: CronogramaComponent
  },
  {
    path: 'orcamento',
    component: OrcamentoComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    DxDiagramModule,
    DxGanttModule,
    DxDataGridModule
  ],
  providers: [],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    EAPComponent,
    CronogramaComponent,
    OrcamentoComponent
  ]
})
export class AppRoutingModule { }
