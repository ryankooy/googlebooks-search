import React from 'react';
import { Button } from 'semantic-ui-react';
import './style.css';

export function Input(props) {
  return (
    <div className=''>
      <input className='' {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className=''>
      <textarea className='' {...props} />
    </div>
  );
}

export function FormButton(props) {
  return (
    <Button {...props} style={{ float: 'right', marginBottom: 10 }} className=''>
      {props.children}
    </Button>
  );
}
