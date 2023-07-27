import {useEffect, useState} from 'react';
import BlogList from './BlogList';
const Home = () => {
    const[blogs,setBlogs]=useState(
        // {title:"mynew website",body:"lorem ipsum......",author:"renu",id:1 },
        // {title:"welcome party!",body:"lorem ipsum......",author:"renuka",id:2 },
        // {title:"web dev top tips",body:"lorem ipsum......",author:"renuka pasam",id:3}

    null);



    useEffect(()=>{
        fetch(' https://fakestoreapi.com/products')
        .then(res=>{
            
            return res.json();
        })
        .then(data=>{
            setBlogs(data);
        })
        .catch(err=>{
            console.log(err.message)
        })
        },[]);
    
    


   
    
    return (
        <div className="home">
           {blogs && <BlogList blogs={blogs} title="All Blogs" />}

        </div>
    );
} 

export default Home;