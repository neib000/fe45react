import React, { Component } from "react";

class Detail extends Component {
  render() {
    const {
      name,
      img,
      price,
      screen,
      backCamera,
      frontCamera,
    } = this.props.item;
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <h3 className="text-center">{name}</h3>
            <img className="w-100" src={img} alt="product" />
          </div>
          <div className="col-8">
            <h3>Thông số kĩ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{screen}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{frontCamera}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{backCamera}</td>
                </tr>
                <tr>
                  <td>Giá</td>
                  <td>{price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
