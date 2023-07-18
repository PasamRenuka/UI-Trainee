import './App.css';
// import React, { Component } from 'react';

const Headercomponent = () => {
    return (
        <header>
            <button id="Carton_btn">   Library</button>
            <ul>
                <li> <a href="#sec" id="btn2" class="Home">Home</a></li>
                <li><a href="#sec" id="btn2" class="About">About</a></li>

                <li><a href="#sec" id="btn2" class="Contact">Contact us</a></li>
            </ul>
            <button id="sign_in">Sign In</button>

        </header>
    )
}
export default Headercomponent;