import {combineReducers} from "redux"
import auth from"./authReducer"
import list from"./listReducer"

export default combineReducers({
    auth,list,
})