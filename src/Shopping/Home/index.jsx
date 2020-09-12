import React, { Component } from "react";
import Header from "../Header";
import ProductList from "../ProductList";
import Detail from "../Detail";
import Cart from "../Cart";

class HomeShopping extends Component {
  products = [
    {
      id: "sp_2",
      name: "Note 7",
      price: 400,
      screen: "screen_2",
      backCamera: "backCamera_2",
      frontCamera: "frontCamera_2",
      img:
        "https://www.xtmobile.vn/vnt_upload/product/01_2018/thumbs/600_note_7_blue_600x600.png",
      desc:
        "The Galaxy Note7 comes with a perfectly symmetrical design for good reason",
    },
    {
      id: "sp_3",
      name: "Vivo",
      price: 500,
      screen: "screen_3",
      backCamera: "backCamera_3",
      frontCamera: "frontCamera_3",
      img: "https://www.gizmochina.com/wp-content/uploads/2019/11/Vivo-Y19.jpg",
      desc:
        "A young global smartphone brand focusing on introducing perfect sound quality",
    },
    {
      id: "sp_4",
      name: "Blacberry",
      price: 600,
      screen: "screen_4",
      backCamera: "backCamera_4",
      frontCamera: "frontCamera_4",
      img:
        "https://cdn.tgdd.vn/Products/Images/42/194834/blackberry-keyone-3gb-600x600.jpg",
      desc:
        "BlackBerry is a line of smartphones, tablets, and services originally designed",
    },
  ];

  state = {
    selectedProduct: null,
    cart: [],
    totalCartItem: 0,
    totalAmount: 0,
  };

  getProduct = (dataFromChild) => {
    console.log(dataFromChild, "data From Child");
    this.setState({
      selectedProduct: dataFromChild,
    });
  };

  putToCart = (prod) => {
    console.log(prod);

    const cloneCart = [...this.state.cart];

    const cartItem = {
      product: prod,
      quantity: 1,
    };

    //kiểm tra sản phẩm đã có trong giỏ hàng chưa
    const index = cloneCart.findIndex((item) => {
      return item.product.id === prod.id;
    });
    //nếu chưa tồn tại thì push vào
    if (index === -1) {
      cloneCart.push(cartItem);
    }
    //có rồi, đổi số lượng
    else {
      cloneCart[index].quantity++;
    }

    //set state
    this.setState({
      cart: cloneCart,
      totalCartItem: this.state.totalCartItem + 1,
    });
  };

  render() {
    return (
      <div>
        <Header total={this.state.totalCartItem} />
        <ProductList
          putToCart={this.putToCart}
          getProduct={this.getProduct}
          data={this.products}
        />
        {this.state.selectedProduct && (
          <Detail item={this.state.selectedProduct} />
        )}
        <Cart data={this.state.cart} />
      </div>
    );
  }
}

export default HomeShopping;
