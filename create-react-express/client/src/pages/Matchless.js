import React from 'react';
import { Col, Row } from '../components/Grid';
import Heading from '../components/Header';
import { Container } from 'semantic-ui-react';

function Matchless() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Heading>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role='img' aria-label='Face With Rolling Eyes Emoji'>
                🙄
              </span>
            </h1>
          </Heading>
        </Col>
      </Row>
    </Container>
  );
}

export default Matchless;
