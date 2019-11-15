import React from 'react';
import { Card, Grid, Container } from 'semantic-ui-react';
import './style.css';

export function Wrapper(props) {
  return <Container fluid>{props.children}</Container>;
}

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
    <Grid.Column centered>
      {props.children}
    </Grid.Column>
  );
}
