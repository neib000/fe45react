import React, { Component } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Content from "../Content";
import Footer from "../Footer";

import "./style.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="ex1-container">
          <Sidebar />
          <Content />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
