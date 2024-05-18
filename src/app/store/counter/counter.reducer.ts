import { createReducer, on } from '@ngrx/store';
import {
  decrementAction,
  incrementAction,
  resetAction,
} from './counter.actions';

export const counter = {
  initialCount: 0,
};

export const counterReducer = createReducer(
  counter,
  on(incrementAction, (state) => {
    console.log('тут');
    return {
      ...state,
      initialCount: state.initialCount + 1,
    };
  }),
  on(decrementAction, (state) => ({
    ...state,
    initialCount: state.initialCount - 1,
  })),
  on(resetAction, (state) => ({ ...state, initialCount: 0 }))
);
