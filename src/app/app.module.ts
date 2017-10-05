import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ManagetradexModule } from './managetradex/';

import { TranslateService } from './managetradex/services/translate/translate.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ManagetradexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
