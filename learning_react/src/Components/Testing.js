import React, { Component } from 'react';
import { Image } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import * as ReactBootstrap from "react-bootstrap";
import { Form, Col, Button, Row } from "react-bootstrap";

class Testing extends Component {
  render() {
    return (
      <>
        <div>Testing</div>
        <button>Click me</button>
        <Row className="mx-0">
          <Button as={Col} variant="primary">Button #1</Button>
          <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
          <Button as={Col} variant="success">Button #3</Button>
        </Row>
        <div>
          <Image
            src="https://dummyimage.com/170x180/000/fff.png&text=sukhi"
            thumbnail
          />
        </div>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Profile</Breadcrumb.Item>
          <Breadcrumb.Item active>Test123</Breadcrumb.Item>
        </Breadcrumb>
        <ReactBootstrap.Button bsStyle="success" bsSize="small">
          Something
        </ReactBootstrap.Button>
      </>
    )
  }
}

export default Testing