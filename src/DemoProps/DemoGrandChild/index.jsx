import React, { Component } from "react";

class DemoGrandChild extends Component {
  render() {
    console.log(this.props.item);
    return (
      <div className="bg-primary text-white p-3">
        <h1>Demo grandchild</h1>
        <h1>Name: {this.props.item.name}</h1>
      </div>
    );
  }
}


// oneway binding vs 2way binding

// state va props


export default DemoGrandChild;
