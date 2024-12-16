import { Component } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-traffic-stats',
  imports: [DashboardItemComponent],
  templateUrl: './traffic-stats.component.html',
  styleUrl: './traffic-stats.component.css'
})
export class TrafficStatsComponent {
  dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];

  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));

  imgSrc = "globe.png";
  imgAlt = "A globe";
  imageData = { imgSrc: this.imgSrc, imgAlt: this.imgAlt };
  title = "Traffic";
}
