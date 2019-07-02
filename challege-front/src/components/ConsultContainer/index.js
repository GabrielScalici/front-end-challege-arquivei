import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './ConsultContainer.css';

//COMPONENTES
import CountConsult from '../CountConsult';
import UseConsult from '../UseConsult';

//REDUX
import { connect } from 'react-redux';
import {
    modificaConsult, modificaDispConsult, modificaNumConsult, modificaLastConsult
} from '../../redux/actions/ConsultActions';

class ConsultContainer extends Component {
    render() {
        return (
            <Container sm={12} md={12} className="Container-card margin">
                <Row sm={12} md={12}>
                    <Col sm={12} md={5} className="margin">
                        <CountConsult
                            last_consult={this.props.last_consult}
                            disp_consults={this.props.disp_consults}
                        />
                    </Col>
                    <Col sm={12} md={5} className="margin">
                        <UseConsult/>
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
        last_consult: state.ConsultReducer.last_consult,

    }
)
export default connect(mapStateToProps, {
    modificaConsult, modificaDispConsult, modificaNumConsult, modificaLastConsult
})(ConsultContainer);
