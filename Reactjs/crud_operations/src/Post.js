import React, { useState } from "react";

const Post = () => {
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/blogs/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
  };

  return (
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
        onSubmit={handleSubmit}
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
        <label>Input: </label>
        <input
          type="text"
          onChange={(e) => setData({ ...data, title: e.target.value })}
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
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Post;
