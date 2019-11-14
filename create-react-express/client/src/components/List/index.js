import React from 'react';
import {  } from 'semantic-ui-react';
import './style.css';

export function List({ children }) {
  return (
    <div className='overflow'>
      <ul className='group'>{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className='item'>{children}</li>;
}
