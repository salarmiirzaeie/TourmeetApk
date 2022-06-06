import {USERPROFILE,CREATEPROFILE,EDITPROFILE} from './actionTypes'
export const profile=()=>({

    type:USERPROFILE
})
export const editprofile=(id)=>({
    type:EDITPROFILE,
    payload:id
})
export const createprofile=(item)=>({
    type:CREATEPROFILE,
    payload:item
})