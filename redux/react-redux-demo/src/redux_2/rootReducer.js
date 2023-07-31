import { combineReducers } from "redux";
import cakeReducer from "../cakeReducer";
import iceCreamReducer from "../iceCream/iceCreamReducers";
import userReducer from'../User/userReducer'

const rootRecuder= combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:userReducer
})
export default rootRecuder