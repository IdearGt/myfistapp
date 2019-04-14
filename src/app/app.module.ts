import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMundo }  from './primercomponente/primer.component';
import { SegundocomponenteComponent } from './segundocomponente/segundocomponente.component'


@NgModule({
  declarations: [
    AppComponent
    ,HolaMundo
    ,SegundocomponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
