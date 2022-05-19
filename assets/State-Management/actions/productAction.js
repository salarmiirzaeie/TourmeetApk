import {PRODUCT_ADD,PRODUCT_REMOVE,PRODUCT_GET_ALL} from './actionTypes'
export const productAdd=(item)=>({
    type:PRODUCT_ADD,
    payload:item
})
export const productRemove=(id)=>({
    type:PRODUCT_REMOVE,
    payload:id
})
export const productGetall=(item)=>({
    type:PRODUCT_GET_ALL,
   
})

