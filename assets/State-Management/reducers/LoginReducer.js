import {LOGEDIN,LOGOUT} from '../actions/actionTypes'
export const LoginReducer=function (state=false,action){


    switch(action.type){
        case LOGEDIN:
            return true;
            case LOGOUT:
                return false;
               
                default:
                    return state
    }
}