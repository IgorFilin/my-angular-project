import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  OnInit,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'ang-test-perfomance',
  templateUrl: './test-perfomance.component.html',
  styleUrls: ['./test-perfomance.component.scss'],
})
export class TestPerfomanceComponent implements OnInit {
  test1: WritableSignal<any> = signal(null);
  test2: WritableSignal<any> = signal(null);
  test3: WritableSignal<any> = signal(null);
  test4: WritableSignal<any> = signal(null);
  test5: WritableSignal<any> = signal(null);

  perfomanceData: Signal<any> = computed(() => [
    {
      title: 'test1',
      desc: '',
    },
    {
      title: 'test2',
      desc: '',
    },
    {
      title: 'test3',
      desc: '',
    },
    {
      title: 'test4',
      desc: '',
    },
    {
      title: 'test5',
      desc: '',
    },
  ]);

  ngOnInit(): void {
    this.test1.set(1);
    this.test2.set(2);
    this.test3.set(3);
    this.test4.set(4);
    this.test5.set(5);
  }
}
