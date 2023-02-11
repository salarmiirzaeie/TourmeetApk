import {TOKEN} from './actionTypes';
export const tokenMode = rest => ({
  type: TOKEN,
  payload: rest,
});
