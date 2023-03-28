import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: true
})
export class ChangeColorDirective {

  constructor(private element:ElementRef) { 
    this.element.nativeElement.style.color='blue'
  }
  @HostListener('mouseenter') mouseenter(){
    this.colorChange('green')
  }
  @HostListener('mouseleave')mouseleave(){
    this.colorChange("red")
  }
  colorChange(newColor:any){
    this.element.nativeElement.style.color = newColor
  }

}
