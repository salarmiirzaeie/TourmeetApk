import {TOKEN} from '../action/actionTypes';
const initialState = null;

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN:
      state = action.payload;

      return state;
    default:
      return state;
  }
};
