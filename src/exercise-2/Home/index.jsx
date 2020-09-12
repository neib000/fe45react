import React, { Component } from "react";
import Header from "../Header";
import Carousel from "../Carousel";
import Intro from "../Intro";
import Cards from "../Cards";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <div className="container">
          <Intro />
          <Cards />
        </div>
        
      </div>
    );
  }
}

export default Home;
