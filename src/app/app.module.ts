import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule } from './layouts';
import { FooterModule } from './shared/components';
import { AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    FooterModule,
    AppRoutingModule
  ],
  providers: [AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
