import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SharedService} from '../services/shared.service';
import { Login } from '../Models/login.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  @ViewChild('info') form_info:NgForm;

  userLogin=new Login();
  errorMessage:string='Enter valid User Name';
  isError:boolean=false;
  letters=/[a-zA-Z]+/;
  numbers=/[0-9]+/;
  constructor(private router:Router,private shared_service:SharedService) { }

  ngOnInit() { 
  
  }

  onPrevious(){
    this.router.navigate(['demo2']);
  }
  onLogIn(){
    this.router.navigate(['log-in']);
  }
  onValidate(){
    console.log(this.form_info);
    
    if((this.userLogin.email && this.userLogin.password)&&(this.userLogin.password.match(this.letters))&&(this.userLogin.password.match(this.numbers))){
      this.signIn();
    }
    else{
      this.userLogin.password='';
      this.isError=true;
      this.errorMessage='Enter valid Password';
      
    }
  }
  signIn(){
      this.shared_service.setData(this.userLogin.email,this.userLogin.password);
      this.router.navigate(['dashbord']);
   
  }
}
