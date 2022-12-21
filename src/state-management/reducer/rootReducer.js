import { combineReducers } from "redux";
import { profileModeReducer } from "./profileModeReducer";
export default combineReducers({
    profileModeState:profileModeReducer
})