import './App.css';
import { Provider } from 'react-redux';
import Cakecontainer from './cakeContainer' 
import store from './redux_2/store';
import React from 'react';
import HooksCakeContainer from './HooksCakeContainer'
import IceCreamcontainer from './iceCreamContainer'
import NewCakecontainer from './NewCakeContainer'
import ItemContainer from './itemContainer'
import UserContainer from './UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <ItemContainer cake/>
      <ItemContainer/>
      <HooksCakeContainer/>
      <Cakecontainer/>
      <IceCreamcontainer/>
      <NewCakecontainer/> */}
      <UserContainer/>
    </div>
    </Provider>
  );
}

export default App;
