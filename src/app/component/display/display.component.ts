import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipecomComponent } from '../pipecom/pipecom.component';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule,PipecomComponent],
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

}
