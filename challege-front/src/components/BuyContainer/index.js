import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//COMPONENTES
import CardUser from '../CardUser';
import BuyConsult from '../BuyConsult';
import DividerLine from '../DividerLine';

import './BuyContainer.css';
import '../../Styles.css';

//REDUX
import { connect } from 'react-redux';
import {
    modificaConsult, modificaDispConsult, modificaNumConsult
} from '../../redux/actions/ConsultActions';

class BuyContainer extends Component {
    render() {
        return (
            <Container>
                <Row sm={12} md={12} className="Container-card grey margin">
                    <Col sm={12} md={5} className="margin">
                        <div>
                            <p className="title-text-rubik primary"> Comprar Crédito: </p>
                            <BuyConsult />
                        </div>
                    </Col>
                </Row>
                <Row className="Container-card white margin">
                    <DividerLine icon="dollar sign" title="Cartão cadastrado" />
                </Row>
                <CardUser />

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
