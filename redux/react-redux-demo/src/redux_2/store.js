import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootRecuder from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';


const store= createStore(rootRecuder,
    composeWithDevTools(applyMiddleware(logger,thunk)))



export default store