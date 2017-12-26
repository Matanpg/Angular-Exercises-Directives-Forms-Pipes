import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-1',
  templateUrl: './directive-1.component.html',
  styleUrls: ['./directive-1.component.css']
})
export class Directive1Component implements OnInit {

  text:string;

  constructor() { }

  ngOnInit() { }

  updateText(value) {
    this.text = value;
    console.log(this.text);
  }
}
