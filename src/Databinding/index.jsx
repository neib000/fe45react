import React, { Component } from "react";

class Databinding extends Component {
  name = "Đặng Trung Hiếu";
  isMale = false;

  checkGender() {
    if (this.isMale) return "Male";
    return "Female";
  }

  //th1: hàm bình thường ,không tham số
  showMessage() {
    console.log("Hiếu đẹp chai");
  }

  //th2: hàm nhận tham số đầu vào
  showMessageWithParams = (message) => () => {
    console.log(message);
  };
  //closure

  //th3: hàm có con trỏ this
  showMessageWithThis = () => {
    console.log(this.name);
  };

  render() {
    let age = 25;

    return (
      <div>
        <button onClick={this.showMessage}>Show message</button>

        <button onClick={this.showMessageWithThis}>
          Show message with this
        </button>

        <button onClick={this.showMessageWithParams("hieu")}>
          Show message with params
        </button>

        <h1>Demo databinding</h1>
        <h3>Author: {this.name}</h3>
        {/* <h3>Gender: {this.checkGender()}</h3> */}
        <h3>Gender: {this.isMale ? "Male" : "Female"}</h3>
        <h3>Age: {age}</h3>
      </div>
    );
  }
}

export default Databinding;
