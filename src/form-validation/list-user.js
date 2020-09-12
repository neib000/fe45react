import React, { Component } from "react";

export default class ListUser extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>MaNV</th>
              <th>TenNV</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}
