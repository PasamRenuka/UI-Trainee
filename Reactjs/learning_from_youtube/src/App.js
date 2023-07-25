import React from "react";
import Form from "./form.js"
import "./App.css";
import Home from "./Home.js";
import ContactForm from "./ContactUs.js";
import Post from "./post.js";

const App = () => {
//http://localhost:8000/blogs
//http://localhost:8000
  return (
    <div className="main">
      {/* <Form /> */}
      <Home/>
      {/* <ContactForm /> */}
      {/* <Post/> */}
    </div>
  )
}

export default App;
