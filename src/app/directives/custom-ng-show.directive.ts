import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[ngCustomShow]',
})
export class CustomNgShowDirective implements OnChanges {
  @Input() ngCustomShow: boolean = true;

  private _el: ElementRef;

  constructor(el: ElementRef) {
    this._el = el;
  }

  ngOnChanges(value: { ngCustomShow: SimpleChange }) {
    this.changeVisionTemplate(value.ngCustomShow.currentValue);
  }

  changeVisionTemplate(isShowed: boolean = this.ngCustomShow) {
    console.log('попали', isShowed);
    if (isShowed) {
      this._el.nativeElement.style.display = 'block';
    } else {
      this._el.nativeElement.style.display = 'none';
    }
  }
}
