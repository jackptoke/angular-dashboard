import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-named-input',
  imports: [],
  templateUrl: './named-input.component.html',
  styleUrl: './named-input.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'named-input',
    "(click)": "onClicked()"
  }
})
export class NamedInputComponent {
  name = input.required<string>();

  // @HostListener("click") onClick() {
  //   console.log("Clicked!!");
  // }
  label = input.required<string>();

  // Gaining access to the host
  // private el = inject(ElementRef);

  onClicked() {
    console.log("Clicked 2!!");
    // console.log(this.el);
  }
  // @HostBinding("class")
  // className = "named-input";
}
