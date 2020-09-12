import React, { Component } from "react";
import DemoChild from "../DemoChild";

class DemoParent extends Component {
  student = {
    name: "hieu",
    age: 12,
  };
  render() {
    return (
      <div className="bg-secondary text-white p-4">
        <h1>Demo parent component</h1>
        <DemoChild item={this.student} />
      </div>
    );
  }
}

export default DemoParent;
