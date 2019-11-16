import React, { Component } from 'react';
import Heading from '../components/Header';
import API from '../utils/API';
import { Col, Row } from '../components/Grid';
// import { BookList} from '../components/List';
// import { subscribeToTimer } from '../api';
import { SearchInput, FormButton } from '../components/Form';
import { Header, List, Container } from 'semantic-ui-react';

class Search extends Component {
  // constructor(props) {
  //   super(props);
  //   subscribeToTimer((err, timestamp) => this.setState({ 
  //     timestamp 
  //   }));
  // }

  state = {
    books: [],
    search: ''
    // timestamp: 'no timestamp yet'
  };

  // componentDidMount() {
  //   this.loadSearch();
  // }

  loadBooks = () => {
    API.findBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSave = event => {
    event.preventDefault();

    if (this.state.search) {
      API.saveBooks({ search: this.state.search })
        .then(res => res.json())
        .catch(err => console.log(err));
    }
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
          result.volumeInfo.imageLinks &&
          result.volumeInfo.imageLinks.thumbnail);

        console.log(booksInfo);

        this.setState({
          books: booksInfo
        });

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

  render() {
    return (
      <Container fluid>
        <Col>
          <Row>
            <Heading />
          </Row>
          <Row>
            <h3>Search Books</h3>
            <form>
              <SearchInput
                value={this.state.search}
                onChange={this.handleInputChange}
                name='search'
                placeholder='Title or Author(s) . . .'
              />
              <FormButton
                disabled={!this.state.search}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormButton>
            </form>
          </Row>
          <Row>
            <h3>Results</h3>
            {this.state.books.length ? (
              <List divided verticalAlign='middle'>
                {this.state.books.map((book, i) => (
                  <List.Item
                    key={i}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    link={book.volumeInfo.link}
                  />
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
