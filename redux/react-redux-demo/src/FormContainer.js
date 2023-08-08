import React, { useState } from "react";
import { useDispatch } from "react-redux";

import changeInputValue from "./FromAction";

function FormContainer() {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const OnSubmit = (value) => {
    const Details = [name, email];
    dispatch(changeInputValue(Details));
    setName("");
    setEmail("");
    console.log("this is Details " + Details[0]);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button type="Submit" onClick={OnSubmit}>
        Submit
      </button>
      {}
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
        <tr>
          <td></td>
        </tr>
      </table>
    </div>
  );
}
export default FormContainer;
