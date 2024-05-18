import { createAction } from '@ngrx/store';

export const setDataRequest = createAction(
  '[Json Placeholder] Set Data',
  (payload) => payload
);

export const getDataRequest = createAction('[Json Placeholder] Get Data');
