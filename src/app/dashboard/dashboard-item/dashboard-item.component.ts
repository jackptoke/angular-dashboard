import { Component, input } from '@angular/core';
import { ImageData } from './image-data.model';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  imgData = input.required<ImageData>();
  title = input.required<string>();

}
