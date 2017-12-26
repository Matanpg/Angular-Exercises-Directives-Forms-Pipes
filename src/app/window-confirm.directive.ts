import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWindowConfirm]',
  exportAs: 'appWindowConfirm'
})
export class WindowConfirmDirective {

  public x = '';

  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
      if(window.confirm('do you want to watch the world burn?')){
        this.x = 'some men just want to watch the world burn';
      }
      else {
        this.x = 'you do not want to watch the world burn';
    }
  }
}
