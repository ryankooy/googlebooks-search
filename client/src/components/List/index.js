import React from 'react';
import { List, Image, Segment, Grid, Header } from 'semantic-ui-react';
import './style.css';

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
  children
}) {
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
          <Segment>
            { children }
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            {description}
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}
