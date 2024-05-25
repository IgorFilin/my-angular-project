import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[ngCustomIf]',
})
export class CustomNgShowDirective implements OnInit {
  @Input() set ngCustomIf(isShow: boolean) {
    this.changeVisionTemplate(isShow);
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnInit() {
    this.changeVisionTemplate();
  }

  changeVisionTemplate(isShow: boolean = true) {
    this.viewContainer.clear();
    if (isShow) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
