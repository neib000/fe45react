import React, { Component } from "react";
import classes from "./style.module.css";

class ProductItem extends Component {
  state = {
    isShow: true,
  };

  toggleDescription = () => {
    // this.state.isShow = !this.state.isShow
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  render() {
    const { name, img, desc } = this.props.item;

    return (
      <div className="card">
        <img src={img} alt="product" className={classes.productImg} />
        <div className="card-body">
          <h3>{name}</h3>

          {this.state.isShow && <p>{desc}</p>}
          {/* {this.isShow ? <p>{desc}</p> : null} */}
          <button
            onClick={() => this.props.getProduct(this.props.item)}
            className="btn btn-success mx-2"
          >
            Xem chi tiết
          </button>
          <button onClick={this.toggleDescription} className="btn btn-info">
            Ẩn mô tả
          </button>
          <button
            onClick={() => this.props.putToCart(this.props.item)}
            className="btn btn-warning"
          >
            Giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
