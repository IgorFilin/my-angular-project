import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonOneComponent } from './lesson-one.component';

describe('LessonOneComponent', () => {
  let component: LessonOneComponent;
  let fixture: ComponentFixture<LessonOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessonOneComponent]
    });
    fixture = TestBed.createComponent(LessonOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
