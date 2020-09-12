import React, { Component } from "react";
import ProductItem from "../ProductItem";

class ProductList extends Component {
  renderProducts = () => {
    // [{},{},{}] => [div.col-4,div.col-4,div.col-4]
    return this.props.data.map((item, index) => {
      return (
        <div className="col-4 mb-4" key={index}>
          <ProductItem putToCart={this.props.putToCart} getProduct={this.props.getProduct} item={item} />
        </div>
      );
    });
  };

  render() {
    // this.props.data
    return (
      <div className="container">
        <h1 className="display-4 text-center">Danh sách sản phẩm</h1>
        <div className="row">{this.renderProducts()}</div>
      </div>
    );
  }
}

export default ProductList;
