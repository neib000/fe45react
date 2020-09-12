import React, { Component } from "react";
import Search from "../Search";
import Users from "../UserList";
import Modal from "../Form";
import { connect } from "react-redux";

class Home extends Component {
  handleAddUser = () => {
    //chỉnh sửa isShow trên store = true
    const action = {
      type: "SHOW_FORM",
    };
    this.props.dispatch(action);
  };

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button onClick={this.handleAddUser} className="btn btn-success">
            Add User
          </button>
        </div>
        <Users />
        {this.props.isShowModal && <Modal />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isShowModal: state.isShow,
  };
};

export default connect(mapStateToProps)(Home);
