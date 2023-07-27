import React from "react";
const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div
      className="container mt-5"
      id="Contact"
      style={{
        backgroundColor: "rgb(61, 197, 197)",
        width: "100%",
        height: "100vh",
        textAlign: "center",
        padding: "30px",
      }}
    >
      <h2 className="mb-3" style={{ marginTop: "70px" }}>
        Contact Us
      </h2>
      <form
        onSubmit={onSubmit}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "white",
          width: "500px",
          height: "300px",
          borderRadius: "10px",
          padding: "25px",
          marginTop: "100px",
        }}
      >
        <div className="mb-3">
          <label
            className="form-label"
            htmlFor="name"
            style={{ marginRight: "20px" }}
          >
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            required
            style={{ marginBottom: "15px", padding: "8px", width: "200px" }}
          />
        </div>
        <div className="mb-3">
          <label
            className="form-label"
            htmlFor="email"
            style={{ marginRight: "22px" }}
          >
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            required
            style={{ marginBottom: "15px", padding: "8px", width: "200px" }}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="message"
            required
            placeholder="FeedBack"
            style={{
              marginBottom: "15px",
              marginLeft: "10px",
              width: "300px",
              height: "100px",
            }}
          />
        </div>
        <button
          className="btn btn-danger"
          type="submit"
          style={{
            padding: "10px",
            width: "100px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "rgb(61, 197, 197)",
          }}
        >
          {formStatus}
        </button>
      </form>
    </div>
  );
};
export default Contact;

// const Contact = () => {
//     return <h1>Contact Me</h1>;
//   };

//   export default Contact;
