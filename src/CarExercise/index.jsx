import React, { Component } from "react";
import redCar from "../img/red-car.jpg";
import blackCar from "../img/black-car.jpg";
import silverCar from "../img/silver-car.jpg";

class CarExercise extends Component {
  state = {
    carImg: redCar,
  };

  changeColor = (img) => () => {
    this.setState(
      {
        carImg: img,
      },
      () => {
        console.log(this.state.carImg);
      }
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={this.state.carImg} alt="car" />
          </div>
          <div className="col-6">
            <p>Change color</p>
            <button
              onClick={this.changeColor(redCar)}
              className="btn btn-danger mx-2"
            >
              Red Color
            </button>
            <button
              onClick={this.changeColor(silverCar)}
              className="btn btn-secondary mx-2"
            >
              Silver Color
            </button>
            <button
              onClick={this.changeColor(blackCar)}
              className="btn btn-dark mx-2"
            >
              Black Color
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CarExercise;
