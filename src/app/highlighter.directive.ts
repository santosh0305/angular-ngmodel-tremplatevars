import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '.appHighlighter'
})
export class HighlighterDirective {

  constructor(private elementRef : ElementRef) 
  { 
    console.log(elementRef);
    this.elementRef.nativeElement.style.backgroundColor = 'green'
    
    this.elementRef.nativeElement.style.fontWeight = 'bold'
  }

}