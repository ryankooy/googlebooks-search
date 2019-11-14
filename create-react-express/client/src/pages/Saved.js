import React, { Component } from 'react';
import DeleteButton from '../components/DeleteButton';
import Header from '../components/Header';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';

class Saved extends Component {
  state = {
    books: [],
    title: '',
    author: '',
    synopsis: ''
  };

  loadBooks = () => {
    API.getBooks()
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
      <Container fluid>
        <Row>
          <Col size='md-6'>
            <Header>
              <h1>What Books Should I Read?</h1>
            </Header>
          </Col>
          <Col size='md-6 sm-12'>
            <Header>
              <h1>Books On My List</h1>
            </Header>
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
