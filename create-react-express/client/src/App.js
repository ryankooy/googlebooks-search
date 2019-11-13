import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Books} />
            <Route exact path="/books" component={Saved} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
