import React, { Component } from 'react';
import Heading from '../components/Header';
import API from '../utils/API';
import { Col, Row } from '../components/Grid';
import { Header, List, Container, Button } from 'semantic-ui-react';
import { ListItem } from '../components/List';

class Saved extends Component {
  state = {
    books: [],
    search: '',
    title: '',
    authors: '',
    description: '',
    image: '',
    link: ''
    // timestamp: 'no timestamp yet'
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.findBooks()
      .then(res =>
        this.setState({ books: res.data, title: '', authors: '', description: '', image: '', link: ''  })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    const thisBook = { _id: id};
    
    API.deleteBook(thisBook)
      .then(book => {
        console.log(`Book ${thisBook} was deleted.`);
        
        this.loadBooks();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Col>
          <Row>
            <Heading />
          </Row>
          <Row>
            <h3>Saved Books</h3>
            {this.state.books.length ? (
              <List divided verticalAlign='middle'>
                {this.state.books.map((book, i) => (
                  <ListItem
                    key={i}
                    title={book.title}
                    authors={book.authors}
                    description={book.description}
                    image={book.image}
                    link={book.link}
                  >
                    <Button.Group>
                      <Button href={book.link} circular={true} color='olive'>View</Button>
                      <Button onClick={() => deleteBook(this._id)} color='red'>✗</Button>
                    </Button.Group>
                  </ListItem>
                ))}
              </List>
            ) : (
              <Header as='h3' textAlign='center'>
                No Results to Display
              </Header>
            )}
          </Row>
        </Col>
      </Container>
    );
  }
}

export default Saved;
