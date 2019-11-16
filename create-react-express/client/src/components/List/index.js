import React from 'react';
import { Button, List, Image, Segment, Grid, Header } from 'semantic-ui-react';
// import Thumbnail from '../Thumbnail';
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
  link
}) {
  return (
    <Segment raised placeholder>
      <Grid columns={1}>
        <Grid.Column>
          <Segment>
            <Header as='h2' content={`${title}, by ${authors[0]}`} />
          </Segment>
          <Image src={image} style={{ maxWidth: '300px' }} centered='true' rounded />
        </Grid.Column>
        <Grid.Column>
          <Button.Group size='big' fluid='true'>
            <Button href={link} circular='true' color='olive'>View</Button>
            <Button.Or />
            <Button>Save</Button>
          </Button.Group>
          <Segment>
            {description}
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}
