import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {HttpModule} from '@angular/http';
import {ActivatedRoute,Router, Params, RouterModule, Routes} from '@angular/router';


@NgModule({
  imports:      [ BrowserModule, HttpModule, ActivatedRoute],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
