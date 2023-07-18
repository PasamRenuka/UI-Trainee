import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components'

function App() {
  const [color, setcolor] = useState('');
  const [bgColor, setBgColor] = useState(color);
  const changeColor = () => {
    // setTimeout(() => {
    //   setBgColor(color);

    // }, 1000);
    setBgColor(color);

  }
//   const StyledButton = styled.header`
//   /* The resulting background color will be based on the bg props. */
//   background-color: ${props => props.bgColor === bgColor ? bgColor : ""}
// `;
  

  
  return (
    <div className="App">
      <h1>Changing Background Color</h1>
      <header className="App-header" style={{ background: bgColor}}>
      {/* <StyledButton> */}
        <input placeholder='Enter color name' onChange={e => setcolor(e.target.value)}></input>

        <button onClick={changeColor}>Change Color</button>
        {/* </StyledButton> */}
</header>
    </div>
  );


};


export default App;
