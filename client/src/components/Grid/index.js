import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import './style.css';

export function Row(props) {
  return (
    <Card.Group>
      <Card fluid>
        {props.children}
      </Card>
    </Card.Group>
  );
}

export function Col(props) {
  return (
    <Grid.Column>
      {props.children}
    </Grid.Column>
  );
}
