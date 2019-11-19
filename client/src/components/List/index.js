import React from 'react';
import { Button, List, Image, Segment, Grid, Header } from 'semantic-ui-react';
import './style.css';
import API from '../../utils/API';

export function BookList(props) {
  return (
    <div className='overflow'>
      <List divided verticalAlign='middle'>
        {props.children}
      </List>
    </div>
  );
}

export function ListItem({
  image,
  title,
  authors,
  description,
  link
}, props) {
  return (
    <Segment raised placeholder>
      <Grid columns={1}>
        <Grid.Column>
          <Segment>
            <Header as='h2' content={`${title}, by ${authors[0]}`} />
          </Segment>
          <Image src={image} style={{ maxWidth: '300px' }} centered={true} rounded />
        </Grid.Column>
        <Grid.Column>
          {props.children}
          <Segment>
            {description}
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}
