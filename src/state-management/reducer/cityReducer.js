import {CITY} from '../action/actionTypes';
const initialState = {id: 12, name: 'تبریز'};

export const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case CITY:
      state = action.payload;

      return state;
    default:
      return state;
  }
};
