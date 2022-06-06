import {USERPROFILE, EDITPROFILE, CREATEPROFILE} from '../actions/actionTypes';
export const ProfileReducer = function (
  state = {
  
  },
  action,
) {
  switch (action.type) {
    case USERPROFILE:
      return state;
    case EDITPROFILE:
      return state;
    case CREATEPROFILE:
      state=action.payload
      return state;
    default:
      return state;
  }
};
