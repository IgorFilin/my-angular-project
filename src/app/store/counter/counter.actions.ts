import { createAction } from '@ngrx/store';

export const incrementAction = createAction('[Counter] Counter increment');
export const decrementAction = createAction('[Counter] Counter decrement');
export const resetAction = createAction('[Counter] Counter reset');
