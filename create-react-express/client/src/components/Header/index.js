import React from 'react';
import {  } from 'semantic-ui-react';
import './style.css';

function Header(props) {
  return (
    <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className=''
    >
      {props.children}
    </div>
  );
}

export default Header;
