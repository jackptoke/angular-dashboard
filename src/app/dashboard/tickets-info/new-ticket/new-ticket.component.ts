import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { NamedInputComponent } from "../../../shared/named-input/named-input.component";

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, NamedInputComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

}
