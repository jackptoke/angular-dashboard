import { Component, input } from '@angular/core';

@Component({
  selector: 'app-named-input',
  imports: [],
  templateUrl: './named-input.component.html',
  styleUrl: './named-input.component.css'
})
export class NamedInputComponent {
  name = input.required<string>();
  label = input.required<string>();

}
