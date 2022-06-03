import { Component } from '@angular/core';
import { locale } from 'devextreme/localization';
import { AppInfoService } from './shared/services';
import config from 'devextreme/core/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  constructor(public appInfo: AppInfoService) {
    locale('pt-BR');
    config({ defaultCurrency: 'BRL' });
  }
}
