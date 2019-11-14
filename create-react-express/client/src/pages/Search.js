import React, { Component } from "react";
import DeleteButton from "../components/DeleteButton";
import Header from "../components/Header";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { subscribeToTimer } from '../api';
import { Input, TextArea, FormButton } from "../components/Form";

class Search extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
  }

  state = {
    Search: [],
    title: "",
    authors: "",
    description: "",
    timestamp: 'no timestamp yet'
  };

  componentDidMount() {
    API.loadPage();
  }

  loadSearch = () => {
    API.getBooks()
      .then(res =>
        this.setState({ Search: res.data, title: "", authors: "", description: "" })
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
      API.saveBook({
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
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Header>
              <div className="App-header">
                <h2>Here's a timer for this Google Search Form app.</h2>
              </div>
              <p className="App-intro">
                This is Ryan's timer value: {this.state.timestamp}.
              </p>
            </Header>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.authors}
                onChange={this.handleInputChange}
                name="authors"
                placeholder="authors (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="description (Optional)"
              />
              <FormButton
                disabled={!(this.state.authors && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormButton>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Header>
              <h1>Search On My List</h1>
            </Header>
            {this.state.Search.length ? (
              <List>
                {this.state.Search.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/Search/" + book._id}>
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
