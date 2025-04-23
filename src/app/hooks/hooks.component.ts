import { CommonModule } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  inject,
  input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'ang-hooks',
  imports: [CommonModule],
  templateUrl: './hooks.component.html',
  styleUrl: './hooks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HooksComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // count = input();
  // propsObj = input(
  //   {}
  //   // {
  //   //   transform: (v: any) => {
  //   //     v.age = 30;
  //   //     return v;
  //   //   },
  //   // }
  // );
  obj = {
    name: 'Igor',
    age: 31,
  };

  cdr = inject(ChangeDetectorRef);

  ngOnChanges(changes: SimpleChanges): void {
    console.log('1 ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('2 ngOnInit');
  }

  ngDoCheck(): void {
    console.log('3 ngDoCheck ChangeDetection сработал');
  }

  ngAfterContentInit(): void {
    console.log('4 ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('5 ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('6 ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('7 ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('8 ngOnDestroy');
  }

  test() {
    this.obj.age += 1;
    // this.cdr.markForCheck();
  }
}
