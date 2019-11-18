import React from 'react';
import { Header } from 'semantic-ui-react';
import './style.css';

function Heading() {
  return (
    <Header
      textAlign='center'
      as='h1'
      content='Google Books Search'
      subheader='with React'
    />
  );
}

export default Heading;
