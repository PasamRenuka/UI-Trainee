import {useState} from 'react';
import BlogList from './BlogList';
const Home = () => {
    const[blogs,setBlogs]=useState([
        {title:"mynew website",body:"lorem ipsum......",author:"renu",id:1 },
        {title:"welcome party!",body:"lorem ipsum......",author:"renuka",id:2 },
        {title:"web dev top tips",body:"lorem ipsum......",author:"renuka pasam",id:3}

    ]);


    const handleDelete = (id)=>{
        const newBlogs=blogs.filter(blog =>blog.id !== id);
        setBlogs(newBlogs);
    }
    // const [name,setname]=useState('renu')
    // const [age,setAge]=useState(22)

    // const handleClick=()=>{
    //     setname ("renuka");
    //     setAge('23');
    // }
    // const handleClickAgain=(name,e)=>{
    //     console.log("hello "+name,e.target);
    // }
    
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==="renuka")} title="Renuka's blogs"/> */}
            
            {/* <h4>Home Page</h4> */}
            {/* <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={()=> handleClickAgain("renu",e)}>Click me Again</button> */}

        </div>
    );
} 

export default Home;