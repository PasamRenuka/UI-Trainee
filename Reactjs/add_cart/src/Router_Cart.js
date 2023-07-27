import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import CartDisplay from "./Cart_display";
import Contact from "./Contact";
import NoPage from "./Nopages";
import Cart from "./Cart";
import React, { useState } from "react";


function Router() {
  const [cart, setCart] = useState([]);

  const [total, setTotal] = useState(0);




  const handleCartNow=(name,price)=>{
    setCart([...cart,{ name:name, price:price}])
    setTotal(total+price)
  }
  // const handleCartDelete=(e)=>{
  //   var value_ = e.target.closest('tr');
  //         value_.remove()
  //     setdeleteCount(deleteCount+1)
  //     // setdeletetotal(deleteTotal+price)
  // }
  
console.log(cart);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout data={cart}/>}>
          <Route index element={<Cart   handleCartNow={handleCartNow}/>} />
          <Route path="cart" element={<CartDisplay data={cart} setCart={setCart} total={total} />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
