import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header } from 'semantic-ui-react';
import '../../App.js';
import './style.css';

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
        <Menu pointing>
          <Header as='h1' color='orange'>
            Google Books
          </Header>
          <Menu.Item
            as={ Link }
            to='/'
            name='search'
            active={activeItem === 'search'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={ Link }
            to='/saved'
            name='saved'
            active={activeItem === 'saved'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </nav>
    );
  }
}

export default Navbar;
