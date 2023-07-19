import React from "react";
import "./App.css";
import { useState } from "react";



const App = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = event => {
    setMessage(myArray);
  };
  const [myArray, setMyArray] = useState('');
  const changeHandler = (event) => {
    setMyArray({ myArray: [event.target.value] });
  };
  const clickHandler = (datum) => {
    setMyArray(myArray + datum);
  };
  const clickClear=event=>{
    setMessage("")
    setMyArray("")
  }
  const comments = ["working", "sleeping", "eating", "coding"];


  return (
    <div className="main2">
        <h1>Feed back Example</h1>

      <header className="App-header">
      {comments.map((datum, index) => {
      return <button className="comment-btn" onClick={() => clickHandler(datum)}>
          {datum}
        </button>;
      })}
      <br />
      <textarea
        rows="6"
        cols="30"
        value={myArray}
        onChange={(event) => changeHandler(event)}
        placeholder="type your comment here"
        
      />
      <br></br>
      <button className="Sub" onClick={()=>handleMessageChange()}>Submit</button>
      <button className="clear" onClick={clickClear}>Clear</button>
      <br></br>
      <p>  Output :     {message}</p>
      </header>
    </div>
  );
};

export default App;
