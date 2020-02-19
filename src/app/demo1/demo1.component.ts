import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  products=[{name:"angular"},
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
  color='#836095';
  status1=true;
  status2=false;
  borderDiv='1px dotted blue';
  text="Chnage the text on button click";
  textColor='#4a4a4a';
  value1;
  value2='Get User input here using target.value';
  value3='Get User input when you press the enter';
  message:string='';
  yourName:string='';
  getValue(){
    return this.str;
  }
  changeContent(){
    this.status1=!this.status1;
    if(this.status1==false){
      this.color='green';
      this.textColor='red';
      this.text="In an event binding, Angular sets up an event handler for the target event.";
    }
    else if(this.status1==true){
      this.color='#836095';
      this.textColor='#4a4a4a';
      this.text="event binding Listen for certain event such as keystrok,mouse movements,click and toushes";
    }  
  }
  changeStyles(){
    this.status2=!this.status2;
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
  constructor() {
    setTimeout(()=>{
      this.isallowed=true
    },2000);
   }

  ngOnInit() {
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
}
