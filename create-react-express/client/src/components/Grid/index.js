import React from 'react';
import {  } from 'semantic-ui-react';
import './style.css';

export function Container(props) {
  return <div className=''>{props.children}</div>;
}

export function Row(props) {
  return <div className=''>{props.children}</div>;
}

export function Col(props) {
  return (
    <div
      className=''
    >
      {props.children}
    </div>
  );
}
