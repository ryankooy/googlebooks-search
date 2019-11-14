import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Matchless from './pages/Matchless';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/' component={Saved} />
          <Route component={Matchless} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
