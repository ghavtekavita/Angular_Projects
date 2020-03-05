import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appDemo2directive]'
})
export class Demo2directiveDirective {
  @HostListener('mouseenter') onMouseEnter(){
    this.demo2Directive(this.heightlight);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.demo2Directive('blue');
  }
  @Input('appDemo2directive') heightlight:string;

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color = 'blue';
  }
  demo2Directive(color:string){
    this.el.nativeElement.style.color = color; 
  }
}
