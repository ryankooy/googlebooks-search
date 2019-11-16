import React from 'react';
import { Link } from 'react-router-dom';
import { Button, List, Message, Image } from 'semantic-ui-react';
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
  image = "https://placehold.it/300x300",
  title,
  authors,
  description,
  link
}) {
  return (
    <List.Item>
      <List.Content floated='right'>
        <Button to={link}>View</Button>
        <Button onClick={this.handleSave}>Save</Button>
      </List.Content>
      <Image src={image} />
      <List.Content>
        <Link to={link}>
          <strong>
            {title} by {authors}
          </strong>
        </Link>
        <Message content={description} />
      </List.Content>
    </List.Item>
  );
}
