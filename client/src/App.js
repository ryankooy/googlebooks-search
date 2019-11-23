import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Grid } from 'semantic-ui-react';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Matchless from './pages/Matchless';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Grid centered celled='internally'>
          <Grid.Column width={8}>
            <Switch>
              <Route exact path='/' component={Search} />
              <Route exact path='/saved' component={Saved} />
              <Route component={Matchless} />
            </Switch>
          </Grid.Column>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
