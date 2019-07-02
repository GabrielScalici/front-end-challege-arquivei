import React from 'react';
import Cards from 'react-credit-cards';

import 'react-credit-cards/es/styles-compiled.css';

//import '../../Styles.css';
import './FormCard.css';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const FormCard = (props) => {
    return (
        <Container className="Container-form" >
            <Row>
                <Col md={6} sm={12}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col md={6} sm={12}>
                    <Cards
                        number={'222222'}
                        name={'2342342'}
                        expiry={'234234324'}
                        cvc={'34234234'}
                    />
                </Col>
            </Row>

        </Container>
    );
};


export default FormCard;