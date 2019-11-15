import React, { Component } from 'react';
import DeleteButton from '../components/DeleteButton';
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
    Search: [],
    title: '',
    authors: '',
    description: ''
    // timestamp: 'no timestamp yet'
  };

  componentDidMount() {
    API.loadPage();
  }

  loadSearch = () => {
    API.getBooks()
      .then(res =>
        this.setState({ Search: res.data, title: '', authors: '', description: '' })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadSearch())
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
    if (this.state.title && this.state.authors) {
      API.saveBooks({
        title: this.state.title,
        authors: this.state.authors,
        description: this.state.description
      })
        .then(res => this.loadSearch())
        .catch(err => console.log(err));
    }
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
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormButton>
            </form>
          </Row>
          <Row>
            <h3>Results</h3>
              {this.state.Search.length ? (
                <List>
                  {this.state.Search.map(book => (
                    <ListItem key={book._id}>
                      <Link to={'/api/books/' + book._id}>
                        <strong>
                          {book.title} by {book.authors}
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
        </Col>
      </Wrapper>
    );
  }
}

export default Search;
