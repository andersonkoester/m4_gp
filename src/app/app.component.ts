import { Component } from '@angular/core';
import { AppInfoService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  constructor(public appInfo: AppInfoService) { }
}
