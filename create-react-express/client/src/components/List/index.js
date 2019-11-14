import React from 'react';
import {  } from 'semantic-ui-react';
import './style.css';

export function List({ children }) {
  return (
    <div className="">
      <ul className="">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="">{children}</li>;
}
