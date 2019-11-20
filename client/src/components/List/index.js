import React from 'react';
import { List, Image, Segment, Grid, Header } from 'semantic-ui-react';
import './style.css';

const styles = {
  fontFamily: "'Baskervville', serif",
  backgroundColor: "lightgray"
}

export function BookList(props) {
  return (
    <div className='overflow'>
      <List divided style={styles} verticalAlign='middle'>
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
    <Segment style={styles} raised placeholder>
      <Grid columns={1}>
        <Grid.Column>
          <Segment>
            <div className='header'>
              <Header as='h2' content={`${title}, by ${authors[0]}`} />
            </div>
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
