import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppCallback }  from './app.callback';
import { Router, RouterModule } from '@angular/router';
import {Http, HttpModule, Response, RequestOptions, Headers} from '@angular/http';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppCallback ],
  bootstrap:    [ AppCallback ],
  providers: [ Router, Http ]
})
export class AppModuleCallback { }
