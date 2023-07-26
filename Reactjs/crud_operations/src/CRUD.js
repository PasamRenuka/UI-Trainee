import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./NavBar";

function Crud() {
  const url = "http://localhost:8000/blogs";
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState({
    postId: "",
    name: "",
    email: "",
    body: "",
  });

  const fetchInfo = () => {
    return axios.get(url).then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleDelete = (index) => {
    // console.log(index);
    axios.delete(`http://localhost:8000/blogs/${index}`);

    fetchInfo();
  };
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleAddChange = (e) => {
    setMsg(() => ({
      ...msg,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = (index) => {
    axios.put(`http://localhost:8000/blogs/${index.id}`, {
      name: `${message}`,
      id: `${index.id}`,
      postId: `${index.postId}`,
      email: `${index.email}`,
      body: `${index.body}`,
    });

    fetchInfo();
  };
  const handlePost = () => {
    axios.post(`http://localhost:8000/blogs/`, msg);

    fetchInfo();
  };

  return (
    <div className="App">
      <Navbar />
      <table>
        <thead>
          <tr>
            <th scope="col">PostId</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Body</th>
            <th scope="col">Update Title</th>
            <th scope="col">Delete</th>
            {/* <th scope="col">Post</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((dataObj, index) => {
            return (
              <tr key={index}>
                <td>{dataObj.postId}</td>
                <td>{dataObj.id}</td>
                <td>{dataObj.name}</td>
                <td>{dataObj.email}</td>
                <td>{dataObj.body}</td>
                <td>
                  <input onChange={handleChange}></input>
                  <button
                    onClick={() => {
                      handleUpdate(dataObj);
                    }}
                    className="btn"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(dataObj.id);
                    }}
                    className="btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100vh",
          textAlign: "center",
          padding: "30px",
        }}
        id="post"
      >
        <form
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "rgb(61, 197, 197)",
            width: "500px",
            height: "300px",
            borderRadius: "10px",
            padding: "25px",
            marginTop: "100px",
          }}
        >
          <h1>Post Method</h1>
          <label>Post Id : </label>
          <input
            type="text"
            name="postId"
            onChange={handleAddChange}
            style={{
              marginBottom: "15px",
              padding: "8px",
              borderRadius: "10px",
              border: "none",
            }}
          />
          <br />
          <label>Name : </label>
          <input
            type="text"
            name="name"
            onChange={handleAddChange}
            style={{
              marginBottom: "15px",
              padding: "8px",
              borderRadius: "10px",
              border: "none",
            }}
          />
          <br />
          <label>email : </label>
          <input
            type="text"
            name="email"
            onChange={handleAddChange}
            style={{
              marginBottom: "15px",
              padding: "8px",
              borderRadius: "10px",
              border: "none",
            }}
          />
          <br />
          <label>Body : </label>
          <input
            type="text"
            name="body"
            onChange={handleAddChange}
            style={{
              marginBottom: "15px",
              padding: "8px",
              borderRadius: "10px",
              border: "none",
            }}
          />
          <br />

          <button
            type="submit"
            style={{
              backgroundColor: "white",
              border: "none",
              padding: "10px",
              borderRadius: "10px",
            }}
            onClick={handlePost}
          >
            post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Crud;
