import React, { Component } from "react";

class ReactForm extends Component {
  state = {
    user: {
      userName: "",
      fullName: "",
      email: "",
      phone: "",
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
    console.log(this.state.user);
  };

  handleSetValue = () => {
    const user = {
      userName: "trunghieu",
      fullName: "dang trung hieu",
      email: "dangtrunghieu147@gmail.com",
      phone: "0334643124",
      type: "VIP",
    };

    this.setState({
      user,
    });
  };

  render() {
    return (
      <form className="w-50 mx-auto" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            onChange={this.handleChange}
            name="userName"
            value={this.state.user.userName}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            onChange={this.handleChange}
            value={this.state.user.fullName}
            name="fullName"
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
            value={this.state.user.phone}
            name="phone"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Type</label>
          <select
            onChange={this.handleChange}
            name="type"
            value={this.state.user.type}
            className="form-control"
          >
            <option>USER</option>
            <option>VIP</option>
          </select>
        </div>
        <button className="btn btn-success">Submit</button>
        <button
          type="button"
          onClick={this.handleSetValue}
          className="btn btn-info ml-3"
        >
          Set value
        </button>
      </form>
    );
  }
}

export default ReactForm;
