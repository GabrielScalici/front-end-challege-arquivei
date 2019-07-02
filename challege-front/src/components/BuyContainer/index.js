import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

//REDUX
import { connect } from 'react-redux';
import {
    modificaConsult, modificaDispConsult, modificaNumConsult
} from '../../redux/actions/ConsultActions';

class BuyContainer extends Component {
    render() {
        return (
            <Container sm={12} md={12} className="Container-card margin">
                <Row sm={12} md={12}>
                    <Col sm={12} md={5} className="margin">
                        
                    </Col>
                    <Col sm={12} md={5} className="margin">
                        
                    </Col>
                </Row>
            </Container>
        );
    }
}

//USANDO REDUX
const mapStateToProps = state => (
    {
        consult: state.ConsultReducer.consult,
        num_consults: state.ConsultReducer.num_consults,
        disp_consults: state.ConsultReducer.disp_consults,
        
    }
)
export default connect(mapStateToProps, {
    modificaConsult, modificaDispConsult, modificaNumConsult
})(BuyContainer);
