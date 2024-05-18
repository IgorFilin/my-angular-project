import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { getDataJsonPlaceholder } from '../store/jsonPlaceholder/jsonPlaceholder.selector';
import { getDataRequest } from '../store/jsonPlaceholder/jsonPlaceholder.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'ang-test-request',
  templateUrl: './test-request.component.html',
  styleUrls: ['./test-request.component.scss'],
})
export class TestRequestComponent {
  store = inject(Store);

  jsonData: Observable<any[]> = this.store.select(getDataJsonPlaceholder);
  // ngAfterViewInit() {
  //   this.jsonData.subscribe((value) => {
  //     console.log(value); // Вывод значения в консоль
  //   });
  // }
  requestData() {
    this.store.dispatch(getDataRequest());
  }
}
