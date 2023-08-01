import './App.css';
import { Provider } from 'react-redux';
import Cakecontainer from './cakeContainer/cakeContainer' 
import store from './redux_2/store';
import React from 'react';
import HooksCakeContainer from './HooksCakeContainer'
import IceCreamcontainer from './iceCreamContainer/iceCreamContainer'
import NewCakecontainer from './cakeContainer/NewCakeContainer'
import ItemContainer from './itemContainer'
import UserContainer from './UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Cake Items</h1>
      <ItemContainer cake/>
      <h1>IceCream Items</h1>
      <ItemContainer/>
      <h1>Hooks with Redux </h1>
      <HooksCakeContainer/>
      <h1>Cake Container</h1>
      <Cakecontainer/>
      <h1>IceCream Container</h1>
      <IceCreamcontainer/>
      <h1>New Cake Container</h1>
      <NewCakecontainer/>
      <h1>User Container</h1>
      <UserContainer/>
    </div>
    </Provider>
  );
}

export default App;
