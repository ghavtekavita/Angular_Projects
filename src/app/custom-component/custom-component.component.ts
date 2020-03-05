import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.scss']
})
export class CustomComponentComponent implements OnInit {
  @Input() childComponent:string;
  @Input() status:boolean=true;
  @Input('custom_property') value:string;
  @Output() messageToParent:EventEmitter<string> = new EventEmitter<string>(); 

  constructor() { }

  ngOnInit() { }

  onClick(){
    this.messageToParent.emit('Hello Parent');
  }

}
