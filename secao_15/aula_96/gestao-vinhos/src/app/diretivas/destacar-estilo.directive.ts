import { Directive , ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[destacarEstilo]'
})
export class DestacarEstiloDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.transformar('bold', 'uppercase');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.transformar();
  }

  constructor(private elementRef: ElementRef) { 
  }

  private transformar(fontWeight:string = null, textTrasform:string = null) {
    this.elementRef.nativeElement.style.fontWeight = fontWeight;
    this.elementRef.nativeElement.style.textTransform = textTrasform;
  }

}
