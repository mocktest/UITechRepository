import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FirstComponent} from './first.component'
  import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,FirstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FirstComponent]
})
export class AppModule { }
