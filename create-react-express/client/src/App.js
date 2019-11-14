import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Books from './pages/Books';
import Saved from './pages/Saved';
import Navbar from './Navbar';
import Wrapper from './Wrapper';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
          <Switch>
            <Route exact path='/' component={Books} />
            <Route exact path='/books' component={Saved} />
          </Switch>
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
