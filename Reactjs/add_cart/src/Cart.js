import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Cart(props) {
  const url = "http://localhost:8000/blogs";
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState({
    postId: "",
    name: "",
    email: "",
    body: "",
    price: "",
  });

  const fetchInfo = () => {
    return axios?.get(url)?.then((res) => setData(res?.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleDelete = (index) => {
    axios?.delete(`http://localhost:8000/blogs/${index}`);

    fetchInfo();
  };
  const handleChange = (event) => {
    setMessage(event?.target?.value);
  };

  const handleAddChange = (e) => {
    setMsg(() => ({
      ...msg,
      [e?.target?.name]: e?.target?.value,
    }));
  };

  const handleUpdate = (index) => {
    axios.put(`http://localhost:8000/blogs/${index.id}`, {
      name: `${message}`,
      id: `${index?.id}`,
      postId: `${index?.postId}`,
      email: `${index?.email}`,
      body: `${index?.body}`,
      price: `${index?.price}`,
    });

    fetchInfo();
  };
  const handlePost = () => {
    axios?.post(`http://localhost:8000/blogs/`, msg);

    fetchInfo();
  };
  const { handleCartNow } = props;
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
            <th scope="col">Price</th>
            <th scope="col">Update Title</th>
            <th scope="col">Delete</th>
            <th scope="col">Add Cart</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((dataObj, index) => {
            return (
              <tr key={index}>
                <td>{dataObj?.postId}</td>
                <td>{dataObj?.id}</td>
                <td>{dataObj?.name}</td>
                <td>{dataObj?.email}</td>
                <td>{dataObj?.body}</td>
                <td>{dataObj?.price}</td>

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
                      handleDelete(dataObj?.id);
                    }}
                    className="btn"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn"
                    onClick={() => {
                      handleCartNow(dataObj?.name, dataObj?.price);
                    }}
                  >
                    Add Cart
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div id="post" className="display">
        <form>
          <h1>Post Method</h1>
          <label>Post Id : </label>
          <input
            className="Input"
            type="number"
            name="postId"
            onChange={handleAddChange}
          />
          <br />
          <label>Name : </label>
          <input
            className="Input"
            type="text"
            name="name"
            maxLength={32}
            onChange={handleAddChange}
          />
          <br />
          <label>email : </label>
          <input
            className="Input"
            type="email"
            name="email"
            onChange={handleAddChange}
          />
          <br />
          <label>Body : </label>
          <input
            className="Input"
            type="text"
            name="body"
            onChange={handleAddChange}
          />
          <br />

          <button className="postBtmn" type="submit" onClick={handlePost}>
            post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cart;
