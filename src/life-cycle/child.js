import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Nguyen",
    };
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  /**
   * chạy khi mỗi lần component nhận 1 props từ component cha truyền vào, phiên bản react cũ
   * - nextProps là props tiếp theo từ component cha truyền vào
   */
  // console.log("Child - componentWillReceiveProps", nextProps);
  // }

  static getDerivedStateFromProps(nextProps, currentState) {
    /**
     * thay thế cho componentWillReceiveProps, trong phiên bản react mới
     * - nextProps là props tiếp theo từ component cha truyền vào
     * - currentState state hiện tại trong component
     */
    console.log("Child - getDerivedStateFromProps", nextProps, currentState);
    return {
      username: "Cybersoft",
    };
    // return null;
  }

  render() {
    console.log("Child - render");
    return (
      <div>
        <h3>Child</h3>
        <p>Username: {this.state.username}</p>
      </div>
    );
  }
}
