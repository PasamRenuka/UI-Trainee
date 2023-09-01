import React from 'react';
import Butterfly from 'icons/butterfly.js';

function App() {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  return (
    <div>
      <h1>Hello Webpack React Image App</h1>
      <Butterfly/>
    </div>
  );
}

export default App;
