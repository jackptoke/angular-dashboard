import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  ticket = input.required<Ticket>()
  show = signal<boolean>(false);

  ticketStatusUpdate = output<string>()

  flipShow() {
    // this.show.set(!this.show());
    this.show.update((show) => !show);
  }

  changeTicketStatus() {
    this.ticketStatusUpdate.emit(this.ticket().id);
  }
}
