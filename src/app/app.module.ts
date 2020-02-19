import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { MatButtonModule } from '@angular/material';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { ChildDemo1Component } from './demo1/child-demo1/child-demo1.component';
import { InternationalPhoneNumber2Module } from 'ngx-international-phone-number2';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    CustomComponentComponent,
    ChildDemo1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    InternationalPhoneNumber2Module ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
