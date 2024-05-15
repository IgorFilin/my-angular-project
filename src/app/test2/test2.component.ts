import { Component } from '@angular/core';

@Component({
  selector: 'ang-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
})
export class Test2Component {
  test2Title = 'HelloWrold';

  changeTitleHandler() {
    this.test2Title = 'Поменяли!';
  }
}
