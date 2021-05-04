import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class App extends Component {
  //other logic
  render() {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={2500} //3 secs
      />
    );
  }
}
