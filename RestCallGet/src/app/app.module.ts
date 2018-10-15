import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {javaComponent} from './components/java.component';
import{javaService} from './services/java.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,javaComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [javaService],
  bootstrap: [javaComponent]
})
export class AppModule { }
