import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';
import { FormsModule } from '@angular/forms';
import { Test5Component } from './test5/test5.component';
import { Test6Component } from './test5/test6/test6.component';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter/counter.reducer';
import { TestRequestComponent } from './test-request/test-request.component';
import { EffectsModule } from '@ngrx/effects';
import { GetJsonDataEffect } from './store/jsonPlaceholder/jsonPlaceholder.effects';
import { jsonPlaceholderReducer } from './store/jsonPlaceholder/jsonPlaceholder.reducer';
import { OutputTestComponent } from './output-test/output-test.component';
import { ChildComponent } from './output-test/child/child.component';
import { Test6DirectivesComponent } from './test6-directives/test6-directives.component';
import { ChangeRandomColorsDirective } from './directives/change-random-colors.directive';

@NgModule({
  declarations: [
    ChangeRandomColorsDirective,
    AppComponent,
    TestComponent,
    Test2Component,
    Test3Component,
    Test4Component,
    Test5Component,
    Test6Component,
    CounterComponent,
    TestRequestComponent,
    OutputTestComponent,
    ChildComponent,
    Test6DirectivesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      counter: counterReducer,
      jsonPlaseholder: jsonPlaceholderReducer,
    }),
    EffectsModule.forRoot(GetJsonDataEffect),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
