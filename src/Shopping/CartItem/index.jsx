import React, { Component } from "react";

class CartItem extends Component {
  render() {
    const { img, name, price } = this.props.item.product;
    const { quantity } = this.props.item;

    return (
      <tr>
        <td>
          <img style={{ width: 130 }} src={img} />
        </td>
        <td style={{ fontSize: 25 }}>{name}</td>
        <td>{price}$</td>
        <td>
          {quantity}
          <div className="btn-group">
            <button className="btn btn-info border-right">-</button>
            <button className="btn btn-info border-left">+</button>
          </div>
        </td>
        <td>{quantity * price}$</td>
        <td>
          <button className="btn btn-info">x</button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
