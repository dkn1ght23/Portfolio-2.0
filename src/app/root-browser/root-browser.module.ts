import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootBrowserRoutingModule } from './root-browser-routing.module';
import { RootDefaultComponent } from './components/root-default/root-default.component';
import {BrowserModule} from "@angular/platform-browser";
import {AppGenericModule} from "../app-generic/app-generic.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    RootDefaultComponent
  ],
  imports: [
    BrowserModule,
    RootBrowserRoutingModule,
    AppGenericModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [
    RootDefaultComponent
  ]

})
export class RootBrowserModule { }
