import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[angChangeRandomColors]',
})
export class ChangeRandomColorsDirective implements AfterViewInit {
  @Input('angChangeRandomColors') colors: string[] = [];

  el$: ElementRef;

  constructor(el: ElementRef) {
    this.el$ = el;
  }

  ngAfterViewInit(): void {
    this.changeRandomColors(this.el$);
  }

  changeRandomColors(el: ElementRef) {
    if (this.colors.length) {
      setInterval(() => {
        const randomIndexColor: number = Math.floor(
          Math.random() * this.colors.length
        );
        if (this.colors[randomIndexColor] !== el.nativeElement.style.color) {
          el.nativeElement.style.color = this.colors[randomIndexColor];
          return;
        }

        if (this.colors[randomIndexColor + 1]) {
          el.nativeElement.style.color = this.colors[randomIndexColor + 1];
        } else {
          el.nativeElement.style.color = this.colors[randomIndexColor - 1];
        }
      }, 1000);
    }
  }
}
