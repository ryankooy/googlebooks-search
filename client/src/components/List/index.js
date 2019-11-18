import React from 'react';
import { Button, List, Image, Segment, Grid, Header } from 'semantic-ui-react';
// import Thumbnail from '../Thumbnail';
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

function save(title, authors, description, image, link) {
  const book = {
    title: title,
    authors: authors,
    description: description,
    image: image,
    link: link
  }
  
  API.saveBooks(book)
    .then(dbBook => {
      console.log(dbBook);
    })
    .catch(err => console.log(err));
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
          <Image src={image} style={{ maxWidth: '300px' }} centered={true} rounded />
        </Grid.Column>
        <Grid.Column>
          <Button.Group size='big' fluid={true}>
            <Button href={link} circular={true} color='olive'>View</Button>
            <Button.Or />
            <Button onClick={() => save(title, authors, description, image, link)} color='orange'>Save</Button>
          </Button.Group>
          <Segment>
            {description}
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}
