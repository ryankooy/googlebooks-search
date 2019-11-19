import React from 'react';
import { Button } from 'semantic-ui-react';
import API from '../utils/API';
import './style.css';

function delete(id) {
  const thisBook = { _id: id};
  
  API.deleteBook(thisBook)
    .then(book => console.log(`Book ${thisBook} was deleted.`))
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
