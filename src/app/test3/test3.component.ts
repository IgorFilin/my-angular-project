import { Component } from '@angular/core';

@Component({
  selector: 'ang-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss'],
})
export class Test3Component {
  text = '222';

  changeTextHandler(event: Event) {
    this.text = (event.currentTarget as HTMLInputElement).value;
  }
}
