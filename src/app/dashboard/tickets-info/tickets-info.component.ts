import { Component } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-tickets-info',
  imports: [DashboardItemComponent, NewTicketComponent],
  templateUrl: './tickets-info.component.html',
  styleUrl: './tickets-info.component.css'
})
export class TicketsInfoComponent {
  imgSrc = "list.png";
  imgAlt = "A list of items";
  imageData = { imgSrc: this.imgSrc, imgAlt: this.imgAlt };
  title = "Support Tickets";
}
