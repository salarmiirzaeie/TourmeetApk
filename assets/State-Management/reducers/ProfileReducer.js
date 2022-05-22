import {USERPROFILE,NONEPROFILE} from '../actions/actionTypes'
export const ProfileReducer=function (state={},action){


    switch(action.type){
        case LOGEDIN:
            return true;
            case LOGOUT:
                return false;
               
                default:
                    return state
    }
}