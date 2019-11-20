import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import '../../App.js';
import './style.css';

const styles = {
  fontFamily: "'Baskervville', serif",
  backgroundColor: "lightslategray"
}

const linkText = {
  color: "white",
  fontSize: "17px"
}

class Navbar extends Component {
  state = { 
    activeItem: 'search'
  };

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <nav>
        <Menu style={styles} pointing>
          <Menu.Item
            as={ Link }
            to='/'
            name='search'
            active={activeItem === 'search'}
            onClick={this.handleItemClick}
            style={linkText}
          />
          <Menu.Item
            as={ Link }
            to='/saved'
            name='saved'
            active={activeItem === 'saved'}
            onClick={this.handleItemClick}
            style={linkText}
          />
        </Menu>
      </nav>
    );
  }
}

export default Navbar;
