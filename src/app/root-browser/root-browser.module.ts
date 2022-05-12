import { NgModule } from '@angular/core';

import { RootBrowserRoutingModule } from './root-browser-routing.module';
import { RootDefaultComponent } from './components/root-default/root-default.component';
import {RootIntroComponent} from "./components/root-intro/root-intro.component";
import {BrowserModule} from "@angular/platform-browser";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from "@angular/material/divider";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    RootDefaultComponent,
    RootIntroComponent
  ],
  imports: [
    BrowserModule,
    RootBrowserRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [
    RootDefaultComponent
  ]

})

export class RootBrowserModule { }
