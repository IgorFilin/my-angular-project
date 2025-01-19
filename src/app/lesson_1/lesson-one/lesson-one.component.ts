import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { LessonOneService } from './../../services/lesson_1/lesson-one.service';

@Component({
  selector: 'ang-lesson-one',
  templateUrl: './lesson-one.component.html',
  styleUrls: ['./lesson-one.component.scss'],
  providers: [LessonOneService],
})
export class LessonOneComponent {
  constructor(
    @SkipSelf() private lessonOneService: LessonOneService,
    @Self() private locallessonOneService: LessonOneService
  ) {
    console.log('lessonOneService', lessonOneService.tesingData);
    console.log('locallessonOneService', locallessonOneService.tesingData);
  }
}
