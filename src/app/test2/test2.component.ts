import { Component } from '@angular/core';

@Component({
  selector: 'ang-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
  standalone: false,
})
export class Test2Component {
  count = 0;
  testObj = {
    name: 'Igor',
    age: 31,
  };

  increment() {
    this.count++;
    // this.testObj = { ...this.testObj, age: this.testObj.age + 1 };
  }
}
