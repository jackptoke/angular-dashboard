import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TicketsInfoComponent } from './dashboard/tickets-info/tickets-info.component';
import { TrafficStatsComponent } from './dashboard/traffic-stats/traffic-stats.component';
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ServerStatusComponent, TicketsInfoComponent, TrafficStatsComponent, DashboardItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ticketing-system';

  serverImageData = { imgSrc: "status.png", imgAlt: "A signal symbol" };
  serverTitle = "Server Status";

  globeImageData = { imgSrc: "globe.png", imgAlt: "A Globe" };
  dashTitle = "Traffic";

  ticketImageData = { imgSrc: "list.png", imgAlt: "A list of items" };
  ticketTitle = "Support Tickets";
}
