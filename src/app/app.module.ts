import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

//added for angular-material dependencies
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule, MatCheckboxModule, MatSliderModule, MatButtonModule, MatButtonToggleModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
