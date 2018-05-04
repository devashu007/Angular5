import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { firstcomp } from './app.firstcomponent';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    firstcomp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
