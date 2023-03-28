import { Component } from '@angular/core';
import { ChangeColorDirective } from 'src/app/directives/change-color.directive';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-home',
  standalone : true,
  imports:[ChangeColorDirective,DisplayComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  OnClick(){
    alert('welcome to angular15');
  }
}
