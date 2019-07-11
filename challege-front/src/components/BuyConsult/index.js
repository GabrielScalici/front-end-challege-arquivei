import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

//COMPONENTES
import PriceConsults from '../PriceConsults';
import BtnShortcut from '../BtnShortcut';
import DividerLine from '../DividerLine';
import { data } from '../DataAtual';
import { sale } from '../Sale';

import '../../Styles.css';

//FIREBASE
import { db } from '../../utils/firebase';

//REDUX
import { connect } from 'react-redux';
import {
    modificaConsult, modificaDispConsult, modificaNumConsult, modificaQuantCompra
} from '../../redux/actions/ConsultActions';
import {
    modificaNameCard,
} from '../../redux/actions/CardActions';
import {
    modificaNameUser,
} from '../../redux/actions/UserActions';


export const BuyConsult = (props) => {

    function addCompra(num_consults, quant_compra, name_card, name_user) {
        if (quant_compra <= 0 || quant_compra === '') {
            alert("Digite uma quantidade válida");
            return 0;
        } else if (name_card === '') {
            alert("Você precisa ter um cartão de crédito cadastrado");
            return 0;
        } else if (name_user === '') {
            alert("Você precisa ter um perfil cadastrado");
            return 0;
        } else {
            let price = sale(num_consults, quant_compra).toFixed(2);
            //ADICIONANDO NO BANCO DE DADOS FIREBASE
            db.ref('/COMPRA').push({
                QUANTIDADE: quant_compra,
                DATA: data(),
                VALOR: price
            });

            //ATUALIZAR OS VALORES
            UpdateValues(quant_compra);
            
            //ALERTA SIMPLES DE CONCLUSÃO
            alert(" Compra feita no valor de " + price);


            return 1;
        }
    }

    function UpdateValues(quant_compra) {
        props.modificaDispConsult(parseInt(props.disp_consults) + parseInt(quant_compra));
        props.modificaNumConsult(parseInt(props.num_consults) + parseInt(quant_compra));
        props.modificaQuantCompra(0);
        console.log("Quantidade disponivel" + props.disp_consults);
    }


    return (
        <Container>
            <Row>
                <Col sm={12} md={4}>
                    <Card className="text-center Card-buy">
                        <Card.Body>
                            <Card.Title> Quantidade </Card.Title>
                            <div className="ui form">
                                <div className="field">
                                    <input type="number" name="name" placeholder="Créditos"
                                        onChange={(text) => {
                                            props.modificaQuantCompra(text.target.value)
                                        }}
                                    />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={4}>
                    <PriceConsults
                        className="Price-consult"
                        valor={(sale(props.num_consults, props.quant_compra).toFixed(2))}
                    />
                </Col>
                <Col sm={12} md={4}>
                    <button onClick={() => { addCompra(props.num_consults, props.quant_compra, props.name_card, props.name_user) }} className="ui massive primary basic button">Comprar</button>
                </Col>
            </Row>
            <DividerLine title="Compra rápida" />
            <Row>
                <Col sm={12} md={3}>
                    <BtnShortcut title="10 CONSULTAS" price={(sale(props.num_consults, 10).toFixed(2))}
                    onClick={() => { addCompra(props.num_consults, 10, props.name_card) }} />
                </Col>
                <Col sm={12} md={3}>
                    <BtnShortcut title="50 CONSULTAS" price={(sale(props.num_consults, 50).toFixed(2))}
                    onClick={() => { addCompra(props.num_consults, 50, props.name_card) }} />
                </Col>
                <Col sm={12} md={3}>
                    <BtnShortcut title="100 CONSULTAS" price={(sale(props.num_consults, 100).toFixed(2))}
                    onClick={() => { addCompra(props.num_consults, 100, props.name_card) }} />
                </Col>
                <Col sm={12} md={3}>
                    <BtnShortcut title="200 CONSULTAS" price={(sale(props.num_consults, 200).toFixed(2))}
                    onClick={() => { addCompra(props.num_consults, 200, props.name_card) }} />
                </Col>
            </Row>

        </Container>

    );
};

BuyConsult.propTypes = {
    quant_compra: PropTypes.number,
    num_consults: PropTypes.number,
    disp_consults: PropTypes.number,
    valor: PropTypes.string,
}

//USANDO REDUX
const mapStateToProps = state => (
    {
        consult: state.ConsultReducer.consult,
        num_consults: state.ConsultReducer.num_consults,
        disp_consults: state.ConsultReducer.disp_consults,
        quant_compra: state.ConsultReducer.quant_compra,
        name_card: state.CardReducer.name_card,
        name_user: state.UserReducer.name_user,
    }
)
export default connect(mapStateToProps, {
    modificaConsult, modificaDispConsult, modificaNumConsult, modificaQuantCompra,
    modificaNameCard, modificaNameUser,
})(BuyConsult);
