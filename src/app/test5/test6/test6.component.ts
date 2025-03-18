import { Component, Input } from '@angular/core';

interface Adress {
  city?: string;
  street?: string;
  house?: number;
}

@Component({
    selector: 'ang-test6',
    templateUrl: './test6.component.html',
    styleUrls: ['./test6.component.scss'],
    standalone: false
})
export class Test6Component {
  name = 'Alisa';

  @Input('surname') surnameProps?: string;
  @Input() adress?: Adress;
}
