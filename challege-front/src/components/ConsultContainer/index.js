import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './ConsultContainer.css';

//COMPONENTES
import CountConsult from '../CountConsult';
import UseConsult from '../UseConsult';
import DividerLine from '../DividerLine';

//REDUX
import { connect } from 'react-redux';
import {
    modificaConsult, modificaDispConsult, modificaNumConsult, modificaLastConsult
} from '../../redux/actions/ConsultActions';

class ConsultContainer extends Component {
    render() {
        return (
            <Container>
                <Row sm={12} md={12} className="Container-card grey margin">
                    <Col sm={12} md={5} className="margin">
                        <CountConsult
                            count={this.props.disp_consults}
                            title="Disponíveis"
                        />
                    </Col>
                    <Col sm={12} md={5} className="margin">
                        <CountConsult
                            count={this.props.num_consults}
                            title="Efetuadas"
                        />
                    </Col>
                </Row>
                <Row className="Container-card white margin">
                    <DividerLine title="Realizar consulta"/>
                </Row>
                <Row sm={12} md={12} className="Container-card white margin">
                    <Col sm={12} md={12} className="margin">
                        <UseConsult />
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
