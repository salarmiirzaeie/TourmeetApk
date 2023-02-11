import {combineReducers} from 'redux';
import {cityReducer} from './cityReducer';
import {profileModeReducer} from './profileModeReducer';
import {tokenReducer} from './tokenReducer';
export default combineReducers({
  profileModeState: profileModeReducer,
  cityState: cityReducer,
  tokenState: tokenReducer,
});
