import React, { Component } from 'react';
import Heading from '../components/Header';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import { Col, Row, Wrapper } from '../components/Grid';
import { List, ListItem } from '../components/List';
// import { subscribeToTimer } from '../api';
import { SearchInput, FormButton } from '../components/Form';

class Search extends Component {
  // constructor(props) {
  //   super(props);
  //   subscribeToTimer((err, timestamp) => this.setState({ 
  //     timestamp 
  //   }));
  // }

  state = {
    books: [],
    title: '',
    authors: ''
    // timestamp: 'no timestamp yet'
  };

  // componentDidMount() {
  //   this.loadSearch();
  // }

  loadBooks = () => {
    API.findBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  loadSearch = () => {
    API.getBooks()
      .then(res =>
        this.setState({
          books: res.data,
          title: '',
          authors: ''
        })
      )
      .then(res => res.loadBooks())
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

    if (this.state.title && this.state.authors) {
      API.saveBooks({
        title: this.state.title,
        authors: this.state.authors
      })
        .then(res => res.json())
        .catch(err => console.log(err));
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.title)
      .then(res => this.setState({
        books: res.data
      }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Wrapper fluid>
        <Col>
          <Row>
            <Heading />
          </Row>
          <Row>
            <h3>Search Books</h3>
            <form>
              <SearchInput
                value={this.state.title}
                onChange={this.handleInputChange}
                name='title'
                placeholder='Title'
              />
              <SearchInput
                value={this.state.authors}
                onChange={this.handleInputChange}
                name='authors'
                placeholder='Author(s)'
              />
              <FormButton
                disabled={!(this.state.authors && this.state.title)}
                onClick={this.loadSearch}
              >
                Submit Book
              </FormButton>
            </form>
          </Row>
          <Row>
            <h3>Results</h3>
              {this.state.books.length ? (
                <List>
                  {this.state.Search.map(book => (
                    <ListItem key={book._id}>
                      <Link to={'/api/books/' + book._id}>
                        <strong>
                          {book.title} by {book.authors}
                        </strong>
                      </Link>
                      <FormButton onClick={this.handleSave}>
                        Save Book
                      </FormButton>
                      {/* <DeleteButton onClick={() => this.deleteBook(book._id)} /> */}
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
          </Row>
        </Col>
      </Wrapper>
    );
  }
}

export default Search;
