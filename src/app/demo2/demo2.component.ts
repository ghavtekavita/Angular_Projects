import { Component, OnInit, HostListener} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {
  color = '#EB984E '
  constructor(private router:Router) { }

  ngOnInit() { }
  isTrue=true;
  addStyle=true;
  cssClass1={
    'class1':this.isTrue,
    'class3':this.isTrue,
    'class4':this.isTrue,
  };
  cssStyle={};
  cssClass2={};
  arr=['Angular','Jvascript','Typescript','HTML','CSS'];
  mark;
  getClass(){
    this.cssClass2={
      'class1':this.isTrue,
      'class2':this.isTrue,
    }
  }
  getStyle(){
    this.addStyle=!this.addStyle;
    this.cssStyle={
      'color':this.addStyle ? 'blue':'tomato',
    };
  }
  onPrevious(){
    this.router.navigate(['/demo1']);
  }
  onNext(){
    this.router.navigate(['sign-in']);
  }

}
