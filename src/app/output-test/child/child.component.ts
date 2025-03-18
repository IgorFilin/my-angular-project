import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'ang-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
    standalone: false
})
export class ChildComponent {
  @Output() sendGradeEvent = new EventEmitter<number>();

  sendGradeHandler() {
    const math = 5;
    this.sendGradeEvent.emit(math);
  }
}
