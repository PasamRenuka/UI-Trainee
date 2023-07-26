import React, { Component } from "react";
import LifecycleB from "./Mount_B";

class LifecycleA extends Component {
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
  render() {
    console.log("LifecycleA render");

    return (
      <div>
        <div>Lifecycle A</div>
        <LifecycleB />
      </div>
    );
  }
}
export default LifecycleA;
