import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[appHighlightDir]'
})
export class HighlightDirDirective {

  @Input() appHighlightDir: string;

  constructor(private el: ElementRef) { }

  @HostListener('window:keyup') onMouseEnter() {
    this.highlight(this.appHighlightDir);
  }

  private highlight(x) {
    let par = x;
    let patt=new RegExp(x,'g');
    $('span').css('background-color','yellow');
    $('div:contains("'+par+'")').html(function(_, html) {
    return html.replace(patt, '<span style="background-Color:green">'+par+'</span>');
     });
  }

  ngOnInit() {}

}
