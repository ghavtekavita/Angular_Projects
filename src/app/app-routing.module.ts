import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Demo1Component} from './demo1/demo1.component';
import {Demo2Component} from './demo2/demo2.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
 
const routes: Routes = [
  {path:'',component:Demo1Component},
  {path:'demo1',component:Demo1Component},
  {path:'demo2',component:Demo2Component},
  {path:'sign-in', component:SignInComponent},
  {path:'log-in',component:LogInComponent},
  {path:'dashbord',component:DashbordComponent},
  {path:'not-found',component:PageNotFoundComponent},
  {path:'**',redirectTo:'/not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
