import { Component } from '@angular/core';

@Component({
    selector: 'ang-test6-directives',
    templateUrl: './test6-directives.component.html',
    styleUrls: ['./test6-directives.component.scss'],
    standalone: false
})
export class Test6DirectivesComponent {
  isShowed: boolean = true;
  isShowDisplay: boolean = true;
}
