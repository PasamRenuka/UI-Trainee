import { combineReducers } from "redux";
// import cakeReducer from "../cakeContainer/cakeReducer";
// import iceCreamReducer from "../iceCream/iceCreamReducers";
// import userReducer from'../User/userReducer'
import sampleReducer from '../FormReducer'

const rootRecuder= combineReducers({
    // cake:cakeReducer,
    // iceCream:iceCreamReducer,
    // user:userReducer,
    form:sampleReducer
})
export default rootRecuder