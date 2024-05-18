import { createSelector } from '@ngrx/store';

interface JsonPlaceholderFeature {
  data: any;
}

interface AppStore {
  state: any;
}

export const getDataJsonPlaceholder = (state: any) => {
  console.log('selector', state);
  return Object.values(state.jsonPlaseholder.data);
};
