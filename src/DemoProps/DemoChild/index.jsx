import React, { Component } from "react";
import DemoGrandChild from "../DemoGrandChild";

class DemoChild extends Component {
  render() {
    return (
      <div className="bg-success text-white p-3">
        <h1>Demo Child component</h1>
        <p>Name: {this.props.item.name}</p>
        <p>Age: {this.props.item.age}</p>

        <DemoGrandChild item={this.props.item} />
      </div>
    );
  }
}

export default DemoChild;
