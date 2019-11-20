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
        this.setState({ books: res.data, title: '', authors: '', description: '', image: '', link: '' })
      )
      .catch(err => console.log(err));
  };

  deleteBook = book => {
    let thisId = book._id;
    
    API.deleteBook(thisId)
      .then(book => {
        console.log(`Book ${thisId} was deleted.`);
        
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
                    <Button.Group attached='bottom'>
                      <Button href={book.link} circular={true} color='olive'>View</Button>
                      <Button onClick={() => this.deleteBook(book)} color='red'>✗</Button>
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
