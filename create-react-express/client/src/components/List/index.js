import React from 'react';
import { Button, List } from 'semantic-ui-react';
// import { Wrapper, Row, Col } from "../Grid";
// import Thumbnail from '../Thumbnail';
import './style.css';

export function BookList(props) {
  return (
    <div className='overflow'>
      <ul className='group'>{props.children}</ul>
    </div>
  );
}

export function ListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  ingredients,
  href
}) {
  return (
    <List divided verticalAlign='middle'>
      <List.Item>
        <List.Content floated='right'>
          <Button>View</Button>
          <Button>Save</Button>
        </List.Content>
        {/* <Image avatar src={} /> */}
        <List.Content>Lena</List.Content>
      </List.Item>
    </List>


    // <li className="list-group-item">
    //   <Wrapper>
    //     <Row>
    //       <Col size="xs-4 sm-2">
    //         <Thumbnail src={thumbnail} />
    //       </Col>
    //       <Col size="xs-8 sm-9">
    //         <h3>{title}</h3>
    //         <p>Ingredients: {ingredients}</p>
    //         <a rel="noreferrer noopener" target="_blank" href={href}>
    //           Go to recipe!
    //         </a>
    //       </Col>
    //     </Row>
    //   </Wrapper>
    // </li>
  );
}
