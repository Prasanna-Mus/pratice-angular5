import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MypipePipe } from 'src/app/pipes/mypipe.pipe';

@Component({
  selector: 'app-pipecom',
  standalone: true,
  imports: [CommonModule,MypipePipe],
  templateUrl: './pipecom.component.html',
  styleUrls: ['./pipecom.component.css']
})
export class PipecomComponent {
public myName=['prasanna','laxmi']

addcourse(newCourse:any){
this.myName.push(newCourse);
}

}
