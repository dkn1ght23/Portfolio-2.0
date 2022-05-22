import { NgModule } from '@angular/core';

import { RootBrowserRoutingModule } from './root-browser-routing.module';
import { RootDefaultComponent } from './components/root-default/root-default.component';
import {RootIntroComponent} from "./components/root-intro/root-intro.component";
import {BrowserModule} from "@angular/platform-browser";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from "@angular/material/divider";
import {FlexLayoutModule} from "@angular/flex-layout";
import { RootSkillsComponent } from './components/root-skills/root-skills.component';
import {MatIconModule} from "@angular/material/icon";
import { RootEducationComponent } from './components/root-education/root-education.component';
import { RootCpComponent } from './components/root-cp/root-cp.component';
import {MatCardModule} from "@angular/material/card";
import { RootProjectComponent } from './components/root-project/root-project.component';
import { RootResearchComponent } from './components/root-research/root-research.component';
import { RootContactComponent } from './components/root-contact/root-contact.component';


@NgModule({
  declarations: [
    RootDefaultComponent,
    RootIntroComponent,
    RootSkillsComponent,
    RootEducationComponent,
    RootCpComponent,
    RootProjectComponent,
    RootResearchComponent,
    RootContactComponent
  ],
    imports: [
        BrowserModule,
        RootBrowserRoutingModule,
        BrowserAnimationsModule,
        MatDividerModule,
        FlexLayoutModule,
        MatIconModule,
        MatCardModule
    ],
  providers: [],
  bootstrap: [
    RootDefaultComponent
  ]

})

export class RootBrowserModule { }
