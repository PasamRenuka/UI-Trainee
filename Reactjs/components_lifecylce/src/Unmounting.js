import React from "react";

class Unmounting extends React.Component {
  constructor() {
    super();
    this.state = {
      delete: false,
    };
  }
  render() {
    return (
      <div>
        <h1>User List</h1>
        <button onClick={() => this.setState({ delete: true })}>
          Delete Users
        </button>
        {this.state.delete ? null : <User />}
      </div>
    );
  }
}
class User extends React.Component {
  componentWillUnmount() {
    alert("Deleted User successfully");
  }
  render() {
    return (
      <div>
        <h3>Username: Renuka</h3>
        <h3>Email: RenukaPasam@gmail.com</h3>
      </div>
    );
  }
}
export default Unmounting;
