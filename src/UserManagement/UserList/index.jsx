import React, { Component } from "react";
import UserItem from "../UserItem";
import { connect } from "react-redux";

class Users extends Component {
  renderUserItem = () => {
    return this.props.users.map((item, index) => (
      <UserItem key={index} item={item} />
    ));
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderUserItem()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userList,
  };
};

export default connect(mapStateToProps)(Users);
