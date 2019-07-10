import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//COMPONENTES
import CardUser from '../CardUser';
import BuyConsult from '../BuyConsult';
import DividerLine from '../DividerLine';
import TitleContainer from '../TitleContainer';


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
                <TitleContainer title="Comprar Créditos" desc="Adquira já mais consultas!"/>
                <Row sm={12} md={12} className="Container-card grey margin">
                    <div>
                        <BuyConsult />
                    </div>
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
