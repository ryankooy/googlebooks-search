import React from 'react';
import { Button, Input } from 'semantic-ui-react';
import './style.css';

export function SearchInput(props) {
  return (
    <div>
      <Input icon='search' placeholder='Search...' {...props} />
    </div>
  );
}

export function FormButton(props) {
  return (
    <Button {...props} style={{ float: 'right', marginBottom: 10 }} />
  );
}
