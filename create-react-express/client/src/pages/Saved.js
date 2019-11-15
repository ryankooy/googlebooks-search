import React, { Component } from 'react';
import DeleteButton from '../components/DeleteButton';
import Heading from '../components/Header';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import { Row, Wrapper } from '../components/Grid';
import { List, ListItem } from '../components/List';

class Saved extends Component {
  state = {
    books: [],
    title: '',
    author: '',
    synopsis: ''
  };

  loadBooks = () => {
    API.findBooks()
      .then(res =>
        this.setState({ books: res.data, title: '', author: '', synopsis: '' })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Wrapper fluid>
        <Row>
          <Heading />
        </Row>
        <Row>
          <h3>Saved Books</h3>
          {this.state.books.length ? (
            <List>
              {this.state.books.map(book => (
                <ListItem key={book._id}>
                  <Link to={'/books/' + book._id}>
                    <strong>
                      {book.title} by {book.author}
                    </strong>
                  </Link>
                  <DeleteButton onClick={() => this.deleteBook(book._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Row>
      </Wrapper>
    );
  }
}

export default Saved;
