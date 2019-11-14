import React from 'react';
import {  } from 'semantic-ui-react';
import './style.css';

function DeleteButton(props) {
  return (
    <span className='' {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
};

export default DeleteButton;
