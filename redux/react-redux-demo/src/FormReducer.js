import CHANGE_INPUT_VALUE from "./FromAction"
const initialState = {
    value: []
  }
  
 const sampleReducer = (state=initialState, action) => {
    switch(action.type){
      case CHANGE_INPUT_VALUE:
        return{
          ...state,
          value: [...state.value,...action.payload]
        }
      // other cases ...
      default: 
       return state
    }
  }
  export default sampleReducer

