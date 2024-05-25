import { Component } from '@angular/core';

@Component({
  selector: 'ang-output-test',
  templateUrl: './output-test.component.html',
  styleUrls: ['./output-test.component.scss'],
})
export class OutputTestComponent {
  mathChildGrade?: number;
  getGrades(value: number) {
    this.mathChildGrade = value;
  }
}
