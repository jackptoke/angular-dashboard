import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { NewTicket, Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets-info',
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets-info.component.html',
  styleUrl: './tickets-info.component.css'
})
export class TicketsInfoComponent {
  tickets: Ticket[] = [];

  onNewTicketCreated(newTicket: NewTicket) {
    const n: Ticket = { id: "T" + Math.floor(Math.random() * 10_000_000), title: newTicket.title, request: newTicket.request, status: 'open' };
    this.tickets.unshift(n);
    console.log(this.tickets);
  }

  onTicketStatusChanged(ticketId: string) {
    // for(let i=0; i<this.tickets.length; i++) {
    //   if(this.tickets[i].id === ticketId){
    //     this.tickets[i].status = 'closed';
    //   }
    // }
    this.tickets = this.tickets.map((ticket) => {
      if(ticket.id === ticketId){
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}
