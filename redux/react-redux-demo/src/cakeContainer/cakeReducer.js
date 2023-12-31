import { BUY_CAKE } from '../redux_2/cakeTypes'

const intinitialState={
    numOfCakes:10
}

const cakeReducer=(state=intinitialState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes:state.numOfCakes-action.payload
        }
        default:return state
    }
}

export default cakeReducer;