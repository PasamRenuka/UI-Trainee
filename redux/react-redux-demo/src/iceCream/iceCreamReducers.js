import {BUY_ICECREAM} from './iceCreamTypes'

const intinitialState={
    numOfIceCreams:20
}

const iceCreamReducer=(state=intinitialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
            numOfIceCreams:state.numOfIceCreams-1
        }
        default:return state
    }
}

export default iceCreamReducer;