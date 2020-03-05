import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-demo1',
  templateUrl: './child-demo1.component.html',
  styleUrls: ['./child-demo1.component.scss']
})
export class ChildDemo1Component implements OnInit {

  @Input() size: number ;
  @Output() sizeChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() { }

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(value: number) {
    if((value==+1)&&(this.size<40)){
      this.size=this.size+1;
    }
    else if(this.size>8){
      this.size=this.size-1;
    }
    //this.size = Math.min(40, Math.max(8, +this.size + value));
    this.sizeChange.emit(this.size);
  }
} 
