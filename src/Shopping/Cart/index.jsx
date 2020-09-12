import React, { Component } from "react";
import CartItem from "../CartItem";

class Cart extends Component {
  renderCartItem = () => {
    return this.props.data.map((item, index) => {
      return <CartItem key={index} item={item} />;
    });
  };

  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          role="document"
          style={{
            maxWidth: 1000,
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Hình Ảnh</th>
                      <th>Sản Phẩm</th>
                      <th>Giá</th>
                      <th>Số Lượng</th>
                      <th>Tổng Cộng</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {/* Tạo component Cartitem 
                    Viết hàm map từ ds giỏ => [CartItem,CartItem]
                    truyền props giỏ hàng từ <Home /> và <Cart />  */}
                    {this.renderCartItem()}
                    {this.props.data.length === 0 && (
                      <tr>
                        <td colSpan="100%" className="text-center">
                          Không có sản phẩm nào trong giỏ hàng
                        </td>
                      </tr>
                    )}

                    {this.props.data.length > 0 && (
                      <tr>
                        <td />
                        <td />
                        <td />
                        <td
                          style={{ fontSize: 30 }}
                          className="font-weight-bold"
                        >
                          Tổng Tiền
                        </td>
                        <td
                          style={{ fontSize: 30 }}
                          className="font-weight-bold"
                        >
                          15$
                        </td>
                        <td>
                          <button
                            style={{ fontSize: 30 }}
                            className="btn btn-info"
                          >
                            Thanh Toán
                          </button>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
