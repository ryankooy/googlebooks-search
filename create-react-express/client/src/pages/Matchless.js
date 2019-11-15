import React from "react";
import { Col, Row, Wrapper } from "../components/Grid";
import Header from "../components/Header";

function Matchless() {
  return (
    <Wrapper fluid>
      <Row>
        <Col>
          <Header>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Header>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default Matchless;
