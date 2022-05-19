import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { productReducer } from "./productReducer";
import { LoginReducer } from "./LoginReducer";

export default combineReducers({
    countState:countReducer,
    productState:productReducer,
    loginState:LoginReducer

})