import React, { Component } from "react";
import ULifecycleB from "./Update_B";

class ULifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "renuka",
    };
    console.log("LifecycleA constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  changestate = () => {
    this.setState({
      name: "CodeValidation",
    });
  };
  render() {
    console.log("LifecycleA render");

    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changestate}>Change state</button>
        <ULifecycleB />
      </div>
    );
  }
}
export default ULifecycleA;
