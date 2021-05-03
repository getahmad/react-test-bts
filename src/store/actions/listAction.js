import { ADD_LIST_REQUEST, LIST_REQUEST } from "./types"

export const getListAction=()=>{
    return {
        type: LIST_REQUEST
    }
}

export const addListAction=(data)=>{
    return{
        type:ADD_LIST_REQUEST,
        payload:data
    }
}