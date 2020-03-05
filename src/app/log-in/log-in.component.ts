import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../Models/user_details.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  //user_details = new UserDetails();
  districtArr = ['pune','Mumbai','Nashik','Thane'];
  stateArr = ['maharashtra','karnataka','Chainai'];
  genderArr = ['male','female'];  
  loginForm : FormGroup;
  isError:boolean=false;
  
  constructor(private router:Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      personal_info : new FormGroup({
        name:new FormControl('',[Validators.required,Validators.minLength(3)]),
        dob:new FormControl('',Validators.required),
        mobile:new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
        email:new FormControl('',[Validators.required,Validators.email,]),
        gender:new FormControl('',Validators.required),
      }),
      address_info:new FormGroup({
        locality:new FormControl('',Validators.required),
        city:new FormControl('',Validators.required),
        district:new FormControl(this.districtArr[0],Validators.required),
        state:new FormControl(this.stateArr[0],Validators.required),
        pin:new FormControl('',Validators.required),
      }),
      pass_info:new FormGroup({
        password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('[0-9a-zA-Z]*')]),
        confirm_password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('[0-9a-zA-Z]*')]),
      })
    });
  }
  onSubmit(){
    console.log(this.loginForm);
    console.log(this.loginForm.get("address_info.locality").value);
    if(this.loginForm.get("pass_info.password")==this.loginForm.get("pass_info.confirm_password")){
      this.router.navigate(['dashbord']);
    }
    else{
      this.isError=true;
    }
    
  }
  onSignIn(){
    this.router.navigate(['sign-in']);
  }
}
