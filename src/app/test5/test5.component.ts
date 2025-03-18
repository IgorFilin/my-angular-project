import { Component, Input } from '@angular/core';
interface Adress {
  city: string;
  street: string;
  house: number;
}

@Component({
    selector: 'ang-test5',
    templateUrl: './test5.component.html',
    styleUrls: ['./test5.component.scss'],
    standalone: false
})
export class Test5Component {
  name = 'Igor';
  surname = 'Filin';
  adress: Adress = {
    city: 'Tula',
    street: 'Gorkogo',
    house: 23,
  };
}
