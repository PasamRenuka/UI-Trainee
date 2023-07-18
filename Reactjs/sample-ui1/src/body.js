import './App.css';
// import {styled} from "styled-components";
import styled from 'styled-components'
const ASD= styled.a
const Body=()=>{
    
    return(
        <section id="sec">
        <h1>Library</h1>
        <h6>Books Details</h6>
        <input placeholder="Enter tasks here...." id="input"></input><br></br>
        <button class="btn" id="Add-list">Add New Books</button>
        <button class="btn" id="update-list">Update Book Details</button>
        <button class="btn" id="remove-list">Remove First Book</button>
      </section>

    )
}
export default Body;