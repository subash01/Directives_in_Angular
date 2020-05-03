import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
@Input() defaultColor:string='transparent';
@Input() highlightColor:string='blue';
@HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elRef:ElementRef, private renderer: Renderer2) { }
  ngOnInit()
  {
  //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor','orange')
  this.backgroundColor='yellow';

  }
  @HostListener('mouseenter') mouseover(eventData: Event){
   //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor','orange', false, false)
   this.backgroundColor=this.defaultColor;
	
}
 @HostListener('mouseleave') mouseleave(eventData: Event){
   //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor','pink', false, false)
	this.backgroundColor=this.highlightColor;
}
}
