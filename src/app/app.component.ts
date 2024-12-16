import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TicketsInfoComponent } from './dashboard/tickets-info/tickets-info.component';
import { TrafficStatsComponent } from './dashboard/traffic-stats/traffic-stats.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ServerStatusComponent, TicketsInfoComponent, TrafficStatsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ticketing-system';

}
