import { createSelector } from '@ngrx/store';

export interface FeatureState {
  initialCount: number;
}

export interface AppState {
  counter: FeatureState;
}

export const selectCounter = (state: AppState) => {
  return state.counter.initialCount;
};
