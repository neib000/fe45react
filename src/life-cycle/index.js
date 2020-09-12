import React, { Component } from "react";
import Child from "./child";
import Pure from "./pure";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    console.log("constructor");
  }

  UNSAFE_componentWillMount() {
    /**
     * chạy 1 lần duy nhất, phiên bản react cũ
     */
    console.log("componentWillMount");
  }

  componentDidMount() {
    /**
     * - Gọi api fetch data
     * - chay 1 lan duy nhất
     */
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    /**
     * Chạy khi state thay đổi
     */
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    /**
     * cho phép nhúng tay vào giai đoạn update state
     * - nếu cho phép update state => return true
     * - nếu k cho phép update state => return false
     */
    console.log("shouldComponentUpdate", nextProps, nextState);
    if (nextState.number === 3) {
      return false;
    }
    return true;
  }

  handlClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    /**
     * Re-render phụ thuộc vào state có thay đổi hay không
     */
    console.log("render");
    return (
      <div>
        <h3>LifeCycle</h3>
        <p>Number: {this.state.number}</p>
        <button className="btn btn-success" onClick={this.handlClick}>
          Click
        </button>
        <Child number={this.state.number} />
        <Pure />
      </div>
    );
  }
}
