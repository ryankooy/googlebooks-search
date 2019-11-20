import React from 'react';
import { Header } from 'semantic-ui-react';

const styles = {
  fontFamily: "'Baskervville', serif",
  fontSize: "50px",
  paddingTop: "30px",
  paddingBottom: "30px",
  backgroundColor: "ghostwhite",
  boxShadow: "0px 0px 20px darkgray"
}

function Heading() {
  return (
    <Header
      textAlign='center'
      as='h1'
      content='Google Books Search'
      subheader='with React'
      style={styles}
    />
  );
}

export default Heading;
