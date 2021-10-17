import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOutlined]'
})
export class OutlinedDirective {
  @Input() color: string = '#343536';
  @Input() strokeWidth: string = '1px';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.border = `${this.strokeWidth} solid ${this.color}`;
    // this.outline();
    
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.border = `${this.strokeWidth} solid transparent`;
    // this.outline();
  }
  
  // private outline() {
  // }

}
