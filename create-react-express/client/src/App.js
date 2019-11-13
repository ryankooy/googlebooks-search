import React, { Component } from "react";
// import { Button, Label } from 'semantic-ui-react';
import logo from "./logo.svg";
import { subscribeToTimer } from './api';
import "./App.css";
import Search from './components/Search';

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
          <Search />
        </div>
        <p className="App-intro">
          This is Ryan's timer value: {this.state.timestamp}.
        </p>
      </div>
    );
  }
}

export default App;
