import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCounter } from '../store/counter/counter.selector';
import {
  incrementAction,
  decrementAction,
  resetAction,
} from './../store/counter/counter.actions';

@Component({
    selector: 'ang-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss'],
    standalone: false
})
export class CounterComponent {
  store = inject(Store);

  count = this.store.select(selectCounter);

  // хук жизн. цикла ( после вмонтирования )
  ngAfterViewInit() {
    // this.count.subscribe((value) => {
    //   console.log(value); // Вывод значения счетчика в консоль
    // });
  }

  increment() {
    this.store.dispatch(incrementAction());
  }

  decrement() {
    this.store.dispatch(decrementAction());
  }

  reset() {
    this.store.dispatch(resetAction());
  }
}
