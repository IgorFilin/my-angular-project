import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LessonOneService {
  tesingData: number = Math.round(Math.random() * 10);
  constructor() {}
}
