import React from 'react';
import { Header, List, Container} from 'semantic-ui-react';
import API from '../utils/API';
import './style.css';

function delete(id) {
  const thisBook = { _id: id};
  
  API.deleteBook(thisBook)
    .then(res => this.loadBooks())
    .catch(err => console.log(err));
}

function DeleteButton(props) {
  return (
    <span>
      <Button {...props} onClick={() => delete(this._id)} color='red'>✗</Button>
    </span>
  );
};

export default DeleteButton;
