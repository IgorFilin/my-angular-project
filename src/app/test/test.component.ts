import { Component } from '@angular/core';
import { ImpurePipe } from './impure-pipe.pipe';
import { CommonModule } from '@angular/common';
interface IUserType {
  age: number;
  name: string;
}

@Component({
  standalone: true,
  selector: 'app-test',
  templateUrl: './test.component.html',
  imports: [ImpurePipe, CommonModule],
  styleUrls: ['test.components.scss'],
})
export class TestComponent {
  count: number = 0;
  disabled: boolean = false;
  isAppLoading: boolean = false;
  phones = ['iPhone 7', 'LG G 5', 'Honor 9', 'Idol S4', 'Nexus 6P'];

  constructor() {
    setTimeout(() => {
      this.isAppLoading = true;
    }, 3000);
  }

  setCount() {
    this.count++;
  }
}
