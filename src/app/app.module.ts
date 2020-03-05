import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { MatButtonModule,MatSelectModule,MatFormFieldModule,MatDividerModule,MatInputModule,MatDatepickerModule ,MatNativeDateModule,MatRadioModule} from '@angular/material';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { ChildDemo1Component } from './demo1/child-demo1/child-demo1.component';
import { InternationalPhoneNumber2Module } from 'ngx-international-phone-number2';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Demo2directiveDirective } from './demo2/demo2directive.directive';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { SharedService } from './services/shared.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashbordComponent } from './dashbord/dashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    CustomComponentComponent,
    ChildDemo1Component,
    Demo2directiveDirective,
    UserComponent,
    SignInComponent,
    LogInComponent,
    PageNotFoundComponent,
    DashbordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    InternationalPhoneNumber2Module ,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
