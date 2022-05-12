import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavComponent } from './components/top-nav/top-nav.component';
import {MatDividerModule} from "@angular/material/divider";
import {RouterModule} from "@angular/router";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    TopNavComponent
  ],
  exports: [
    TopNavComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class AppGenericModule { }
