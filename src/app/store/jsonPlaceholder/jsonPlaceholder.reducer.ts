import { createReducer, on } from '@ngrx/store';
import { setDataRequest } from './jsonPlaceholder.actions';

const state = {
  data: [],
};

export const jsonPlaceholderReducer = createReducer(
  state,
  on(setDataRequest, (state, payload) => {
    // console.log('-_-', payload);
    return {
      ...state,
      data: payload,
    };
  })
);
