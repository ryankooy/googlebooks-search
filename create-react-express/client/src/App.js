import React, { Component } from "react";
import logo from "./logo.svg";
import { subscribeToTimer } from './api';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
  }

  state = {
    timestamp: 'no timestamp yet'
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Here's a timer for this Google Books Search app.</h2>
        </div>
        <p className="App-intro">
          This is Ryan's timer value: {this.state.timestamp}.
        </p>
      </div>
    );
  }
}

export default App;
