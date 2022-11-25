import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './Contador/contador.module';
import { HeroeModule } from './Heroes/Heroe.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    HeroeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
