import React, { Component } from "react";
import "./style.css";
import CartItem from "../CartItem";

class Cards extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <CartItem />
        </div>

        <div className="col-sm-4">
          <CartItem />
        </div>

        <div className="col-sm-4">
          <CartItem />
        </div>
      </div>
    );
  }
}

export default Cards;
