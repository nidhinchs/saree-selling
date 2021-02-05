import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomButton]'
})
export class CustomButtonDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.color = "red"
  }

}
