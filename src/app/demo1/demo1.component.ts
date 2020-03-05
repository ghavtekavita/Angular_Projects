import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  subjects=[{name:"Angular"},
    {name:"Typescript"},
    {name:"javascript"},
    {name:"html"},
    {name:"css"}
  ];

  type:string='dynamic';
  id:number=10;
  str:string="This string is return from the method by using the sting interpolation.";
  isallowed=false;
  path='/assets/facebook.png';
  classes='ngclassExample';
  myId='propertyId';
  parentValue='hello child';
  actionName='Label to the element';
  color='#4a4a4a';
  status1=true;
  borderDiv='none';
  text="Chnage the text on button click";
  textColor='#4a4a4a';
  value1;
  value2='Get User input here using target.value';
  value3='Get User input when you press the enter';
  message:string='';
  yourName:string='';
  yourMobile:number;
  selected_subject;
  fontSize:number=14  ;  //This initiallization is important
  class_status:string='Add Class';
  class_status_flag:boolean=false;
  style_status:string='Add Border';
  style_status_flag:boolean=false;
  property_name="custom_property";

  constructor(private router:Router) {
    setTimeout(()=>{
      this.isallowed=true
    },2000);
   }

  ngOnInit() {
    this.selected_subject = this.subjects[0]
  }

  getValue(){
    return this.str;
  }

  changeContent(){
    this.status1=!this.status1;
    if(this.status1==false){
      this.color='#836095';
      this.textColor='red';
      this.text="In an event binding, Angular sets up an event handler for the target event.";
    }
    else if(this.status1==true){
      this.color='#4a4a4a';
      this.textColor='#4a4a4a';
      this.text="event binding Listen for certain event such as keystrok,mouse movements,click and toushes";
    }  
  }

  classBinding(){
    this.class_status_flag=!this.class_status_flag;
    if(this.class_status_flag){
      this.class_status='Remove Class';
    }
    else if(!this.class_status_flag){
      this.class_status='Add Class';
    }
  }

  styleBinding(){
    this.style_status_flag=!this.style_status_flag;
    if(this.style_status_flag){
      this.style_status='Remove Border';
      this.borderDiv='1px dotted blue';
    }
    else if(!this.style_status_flag){
      this.style_status='Add Border';
      this.borderDiv='none';
    }
  }

  eventBind(event:any){
    this.value1=event.type;
    console.log(event);
  }
  keyEvent(event:any){
    this.value2=event.target.value;
    console.log(event);
  }
  templateEvent(value){
    this.value3=value;
  }

  changeImagePath(){
    this.path='/assets/linkedin.png';
  }
  messageFromChild(message:string){
    if(this.message===''){
    this.message=message;
    }
    else{
      this.message='';
    }
  }
  selectedSubject(value){
    console.log(this.selected_subject.name);
  }
  onNavigate(){
    this.router.navigate(['/demo2']);
  }
}
