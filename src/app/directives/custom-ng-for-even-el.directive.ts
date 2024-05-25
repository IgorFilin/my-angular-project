import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[ngForEvenEl]',
})
export class CustomNgForEvenElDirective {
  @Input() set ngForEvenEl(collection: any) {
    this.viewContainer.clear();
    collection.forEach((item: any, index: any) => {
      if (item % 2 === 0) {
        this.viewContainer.createEmbeddedView(this.temRef, {
          $implicit: item,
          index,
        });
      }
    });
  }

  constructor(
    private temRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
