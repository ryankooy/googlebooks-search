import React, { Component } from 'react';
import Heading from '../components/Header';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import { Col, Row } from '../components/Grid';
// import { BookList} from '../components/List';
// import { subscribeToTimer } from '../api';
import { SearchInput, FormButton } from '../components/Form';
import { Header, Button, List, Container } from 'semantic-ui-react';

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
      .then(res =>
        this.setState({ books: res.data })
      )
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
      API.saveBooks({
        search: this.state.search
      })
        .then(res => res.json())
        .catch(err => console.log(err));
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.getBooks(this.state.search)
      .then(res => {
        this.setState({
          books: res.data
        });

        console.log(this.state.books);
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
              {/* <SearchInput
                value={this.state.authors}
                onChange={this.handleInputChange}
                name='authors'
                placeholder='Author(s)'
              /> */}
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
                {this.state.books.map(book => (
                  <List.Item key={book._id}>
                    <List.Content floated='right'>
                      <Button>View</Button>
                      <Button onClick={this.handleSave}>Save</Button>
                      {/* <DeleteButton onClick={() => this.deleteBook(book._id)} /> */}
                    </List.Content>
                    {/* <Image /> */}
                    <List.Content>
                      <Link to={'/api/book/' + book._id}>
                        <strong>
                          {book.title} by {book.authors}
                        </strong>
                      </Link>
                    </List.Content>
                  </List.Item>
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
