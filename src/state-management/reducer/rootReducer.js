import {combineReducers} from 'redux';
import {cityReducer} from './cityReducer';
import {profileModeReducer} from './profileModeReducer';
export default combineReducers({
  profileModeState: profileModeReducer,
  cityState: cityReducer,
});
