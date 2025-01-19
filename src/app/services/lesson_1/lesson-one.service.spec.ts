import { TestBed } from '@angular/core/testing';

import { LessonOneService } from './lesson-one.service';

describe('LessonOneService', () => {
  let service: LessonOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
