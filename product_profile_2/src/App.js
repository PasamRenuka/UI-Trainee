import Bloger from './Bloger'
import { useState } from 'react';
import ProtectedRouter from './protectedrouter'
import {BrowserRouter as Router, Route,Routes,Link,Navigate,Redirect} from 'react-router-dom';
import Combine from './Combine_profile';
import LoginPage from './Login';
function App() {
  const [Login, setLogin] = useState(false);
  const Logintoggle = () => {
    setLogin(!Login);
    console.log(Login.toString())
    if(!Login)
    {
      alert("Loged In");
    }
  };


  
  return (
    <Router>
        <Routes>
            <Route  element={<ProtectedRouter Login={Login} />}>
                <Route path="/Profile"  element={<Combine  Logintoggle={Logintoggle}/>} />
            </Route>
            <Route path="/" exact element={<Bloger/>} />
            <Route path="/login"  element={<LoginPage Logintoggle={Logintoggle} />} />
           
        </Routes>
     </Router>
    
    
  );
}


export default App;
