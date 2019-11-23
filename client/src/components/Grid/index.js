import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

const styles = {
  backgroundColor: "ghostwhite",
  boxShadow: "0px 0px 20px black"
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
    <Grid.Column>
      {props.children}
    </Grid.Column>
  );
}
