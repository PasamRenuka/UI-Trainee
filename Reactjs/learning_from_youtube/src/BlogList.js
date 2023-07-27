// import { Navbar } from "rsuite";
import Navbar from "./Navbar";
import React, { useState } from 'react';



const BlogList = ({blogs,title,handleDelete}) => {
    const [data, setData] = useState([]);

  const handleSubmit = async (index) => {
    // e.preventDefault();
    const response = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify(data[index]),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
  }

    return (
        <div>
        <Navbar/>
    <div className="blog-list">
       
        
        

   {blogs.map((blog,index)=>(
        <div className='blog-preview' key={blog.id}>
            <div className="title" title={blog.title} onChange={e => setData({...data, title})}>{ blog.title.slice(0,12) } </div><br/>
            <p> <img src={blog.image}></img></p>
            <p className="price">Price : {blog.price}</p>
            <button onSubmit={()=>handleSubmit()} className="buy">Buy Now</button>
            
            </div>
    ))} 
    </div>
    </div>
    );
}
 
export default BlogList;
