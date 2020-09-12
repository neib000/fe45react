import React, { Component } from "react";
import { connect } from "react-redux";

class Modal extends Component {
  handleCloseForm = () => {
    this.props.dispatch({
      type: "CLOSE_FORM",
    });
  };

  state = {
    user: {
      username: "",
      name: "",
      email: "",
      phoneNumber: "",
      type: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.user) {
      //code update
      this.props.dispatch({
        type: "UPDATE_USER",
        payload: this.state.user,
      });
    } else {
      this.props.dispatch({
        type: "CREATE_USER",
        payload: this.state.user,
      });
    }
    console.log(this.refs);
    this.refs.btnCancel.click();
    // this.handleCloseForm();
  };

  render() {
    return (
      <div
        style={{
          background: "rgba(0,0,0,0.7)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="bg-white w-50 mx-auto px-5 pb-3 rounded ">
          <h1 className="text-center display-4 m-0">Form User</h1>

          <form ref="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                onChange={this.handleChange}
                name="username"
                value={this.state.user.username}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                onChange={this.handleChange}
                name="name"
                value={this.state.user.name}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                onChange={this.handleChange}
                value={this.state.user.email}
                name="email"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                onChange={this.handleChange}
                value={this.state.user.phoneNumber}
                name="phoneNumber"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Type</label>
              <select
                onChange={this.handleChange}
                value={this.state.user.type}
                name="type"
                className="form-control"
              >
                <option>USER</option> <option>VIP</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <button
              ref="btnCancel"
              onClick={this.handleCloseForm}
              type="button"
              className="btn btn-light ml-3"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.user && this.setState({ user: this.props.user });
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: "SELECT_USER",
      payload: null,
    });
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.selectedUser,
  };
};

export default connect(mapStateToProps)(Modal);
