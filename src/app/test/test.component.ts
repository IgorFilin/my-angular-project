import { Component } from '@angular/core';

interface IUserType {
  age: number;
  name: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['test.components.scss'],
})
export class TestComponent {
  count: number = 0;
  disabled: boolean = false;
  isAppLoading: boolean = false;

  constructor() {
    setTimeout(() => {
      this.isAppLoading = true;
    }, 3000);
  }

  setCount() {
    this.count++;
  }
}
