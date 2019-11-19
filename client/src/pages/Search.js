import React, { Component } from 'react';
import Heading from '../components/Header';
import API from '../utils/API';
import { Col, Row } from '../components/Grid';
import { SearchInput } from '../components/Form';
import { Header, List, Container, Button } from 'semantic-ui-react';
import { ListItem } from '../components/List';

class Search extends Component {
  state = {
    books: [],
    search: '',
    title: '',
    authors: '',
    description: '',
    image: '',
    link: ''
  };

  loadBooks = () => {
    API.findBooks()
      .then(res =>
        this.setState({ books: res.data, title: '', authors: '', description: '', image: '', link: ''  })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.getBooks(this.state.search)
      .then(res => {
        const booksInfo = res.data.items.filter(result => 
          result.volumeInfo.title &&
          result.volumeInfo.infoLink &&
          result.volumeInfo.authors &&
          result.volumeInfo.description &&
          result.volumeInfo.imageLinks.thumbnail);

        console.log(booksInfo);

        this.setState({
          books: booksInfo,
        });
        
        // test
        const aBook = res.data.items[0].volumeInfo;
        console.log(`
          Title: ${aBook.title}
          Author(s): ${aBook.authors}
          Description: ${aBook.description}
          Image: ${aBook.imageLinks.thumbnail}
          Link: ${aBook.infoLink}
        `);
      })
      .catch(err => console.log(err));
  };

  save = (title, authors, description, image, link) => {
    const book = {
      title: title,
      authors: authors,
      description: description,
      image: image,
      link: link
    }
    
    API.saveBooks(book)
      .then(dbBook => {
        console.log(dbBook);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Col>
          <Row>
            <Heading />
          </Row>
          <Row>
            <h3>Search Books</h3>
              <SearchInput
                value={this.state.search}
                onChange={this.handleInputChange}
                name='search'
                placeholder='Title or Author(s) . . .'
                fluid={true}
              />
              <Button
                circular={true}
                color='olive'
                disabled={!this.state.search}
                onClick={this.handleFormSubmit}
              >
                Search
              </Button>
          </Row>
          <Row>
            <h3>Results</h3>
            {this.state.books.length ? (
              <List divided verticalAlign='middle'>
                {this.state.books.map((book, i) => (
                  <ListItem
                    key={i}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    link={book.volumeInfo.infoLink}
                  >
                    <Button.Group>
                      <Button href={book.volumeInfo.infoLink} circular={true} color='olive'>View</Button>
                      <Button onClick={() => this.save(book.volumeInfo.title, book.volumeInfo.authors, book.volumeInfo.description, book.volumeInfo.imageLinks.thumbnail, book.volumeInfo.infoLink)} color='green'>Save</Button>
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

export default Search;
