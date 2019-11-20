import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import './style.css';

const styles = {
  fontFamily: "'Baskervville', serif",
  backgroundColor: "lightgray",
  boxShadow: "0px 0px 20px darkgray"
}

export function Row(props) {
  return (
    <Card.Group>
      <Card style={styles} fluid>
        {props.children}
      </Card>
    </Card.Group>
  );
}

export function Col(props) {
  return (
    <Grid.Column style={{ fontFamily: "'Baskervville', serif" }}>
      {props.children}
    </Grid.Column>
  );
}
