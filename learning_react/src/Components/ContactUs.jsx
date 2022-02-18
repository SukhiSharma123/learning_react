import React from 'react'
import { Form, Col, Button, Row, Navbar, Nav, Container, NavDropdown, FormControl, FloatingLabel } from "react-bootstrap";

function ContactUs() {
    return (
        <>
            <Row>
                <Col md='4'>
                    <>
                        <Form>
                        <Form.Label>Random Testing</Form.Label>

                        <FloatingLabel controlId="floatingPassword" label="Random Text">
                                <Form.Control type="Text" placeholder="Random Texting" required/>
                            </FloatingLabel>
                            <br />
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" required/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password" required/>
                            </FloatingLabel>
                            <br />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </>
                </Col>
                <Col md='4'>
                    <Form>
                        <Form.Label>Leave a Message here..</Form.Label>
                        <br />
                        <Form.Label>Your Name Here</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Your Name'
                            required
                        />
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Your Name'
                            required
                        />
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Your Name'
                            required
                        />
                        <br />
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Col>
                <Col md='4' styele={{}}>
                    <br />
                    <p>Address: Janakpur</p>
                    <br />
                    <p>Phone Number: +977982435465</p>
                    <br />
                    <p>Person: Sukhchandra Sharma</p>
                </Col>
            </Row>
        </>

    )
}

export default ContactUs