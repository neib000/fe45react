import React, { Component } from "react";
import ListUser from "./list-user";

export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        manv: "",
        tennv: "",
        email: "",
      },
      errors: {
        manv: "",
        tennv: "",
        email: "",
      },
      manvValid: false,
      tennvValid: false,
      emailValid: false,
      formValid: false,
    };
  }

  handleOnchange = (e) => {
    const { name, value } = e.target;
    this.setState({
      values: { ...this.state.values, [name]: value },
    });
  };

  handleErrors = (e) => {
    const { name, value } = e.target;
    let mess = "";
    mess = value === "" ? name + " khong duoc rong" : "";
    let { manvValid, tennvValid, emailValid } = this.state;
    switch (name) {
      case "manv":
        manvValid = mess !== "" ? false : true;
        if (value !== "" && value.length < 4) {
          manvValid = false;
          mess = "Ky tu > 3";
        }
        break;
      case "tennv":
        tennvValid = mess !== "" ? false : true;
        break;
      case "email":
        emailValid = mess !== "" ? false : true;
        if (
          value !== "" &&
          !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        ) {
          mess = "Email k hop le!";
          emailValid = false;
        }
        break;

      default:
        break;
    }

    this.setState(
      {
        errors: { ...this.state.errors, [name]: mess },
        manvValid,
        tennvValid,
        emailValid,
      },
      () => {
        this.validationForm();
      }
    );
  };

  validationForm = () => {
    const { manvValid, tennvValid, emailValid } = this.state;
    this.setState({
      formValid: manvValid && tennvValid && emailValid,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.values);
  };

  render() {
    return (
      <div className="container">
        <h3 className="title">*FormValidation</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>MaNV</label>
            <input
              type="text"
              className="form-control"
              name="manv"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
            />
            {this.state.errors.manv !== "" ? (
              <div className="alert alert-danger">{this.state.errors.manv}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>TenNV</label>
            <input
              type="text"
              className="form-control"
              name="tennv"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
            />
            {this.state.errors.tennv !== "" ? (
              <div className="alert alert-danger">
                {this.state.errors.tennv}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.handleOnchange}
              onBlur={this.handleErrors}
            />
            {this.state.errors.email !== "" ? (
              <div className="alert alert-danger">
                {this.state.errors.email}
              </div>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success"
            disabled={!this.state.formValid}
          >
            Submit
          </button>
        </form>
        <ListUser />
      </div>
    );
  }
}
