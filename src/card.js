import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <h1>Geekster</h1>
        <p>my name is {this.props.para}</p>
       
      </div>
    );
  }
}

export default Card;