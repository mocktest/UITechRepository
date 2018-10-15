import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {firstComponent} from "./component/first.component";
import {secondComponent} from "./component/second.component";
import{myService} from "./services/my.service";
@NgModule({
  declarations: [
    AppComponent,firstComponent,secondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [myService],
  bootstrap: [firstComponent,AppComponent]
})
export class AppModule { }
