import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <h1>{this.props.title}</h1>
        <h2>{this.props.num}</h2>
        <h3>{this.props.func(10, 20)}</h3>
        <h4>{JSON.stringify(this.props.myobj)}</h4>
      </div>
    );
  }
}
