import './App.css';
import { Provider } from 'react-redux';
// import Cakecontainer from './cakeContainer/cakeContainer' 
import store from './redux_2/store';
import React from 'react';
// import HooksCakeContainer from './HooksCakeContainer'
// import IceCreamcontainer from './iceCreamContainer/iceCreamContainer'
// import NewCakecontainer from './cakeContainer/NewCakeContainer'
// import ItemContainer from './itemContainer'
// import UserContainer from './UserContainer';
import FormContainer from './FormContainer'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <p>hi</p>
        <FormContainer/>
     </div>
    
    </Provider>


)
}

export default App;
