import React from "react";
import {connect} from 'react-redux'
import { buyCake } from '../redux_2/index_redux';


function Cakecontainer(props){
    return(
        <div>
            <h2>Number of cakes-{props.numOfCakes}</h2>
             
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}


const mapStateToProps=state=>{
    return{
        numOfCakes:state.cake.numOfCakes
    }
}


const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}




export default connect(mapStateToProps,mapDispatchToProps) (Cakecontainer);
