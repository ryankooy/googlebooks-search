import React from 'react';
import { Button } from 'semantic-ui-react';
import './style.css';

function Search() {
  return (
    <div>
      <Button.Group>
        <Button>Een</Button>
        <Button.Or />
        <Button>Twee</Button>
        <Button.Or />
        <Button>Drie</Button>
      </Button.Group>
    </div>
  );
}

export default Search;
