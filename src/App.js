import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./card.js";


class App extends Component {
  render() {
    return (
      <div className="App">
       <Card para="
The overall rating of Geekster is 4.0, with Work-Life balance being rated at the top and given a rating of 4.0."
       />
         <Card para="
The overall rating of Geekster is 4.0, with Work-Life balance being rated at the top and given a rating of 4.0."
       />
         <Card para="
The overall rating of Geekster is 4.0, with Work-Life balance being rated at the top and given a rating of 4.0."
       />
         <Card para="
The overall rating of Geekster is 4.0, with Work-Life balance being rated at the top and given a rating of 4.0."
       />
      </div>
    );
  }
}

export default App;
