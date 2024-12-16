import { ImageData } from './../dashboard-item/image-data.model';
import { Component } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-server-status',
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus = 'online';
  imgSrc = "status.png";
  imgAlt = "A signal symbol";
  imageData = { imgSrc: this.imgSrc, imgAlt: this.imgAlt };
  title = "Server Status";
}
