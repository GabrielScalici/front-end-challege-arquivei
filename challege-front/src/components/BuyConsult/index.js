import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

//COMPONENTES
import PriceConsults from '../PriceConsults';
import { data } from '../DataAtual';
import { sale } from '../Sale';

import './BuyConsult.css';

//FIREBASE
import { db } from '../../utils/firebase';

//REDUX
import { connect } from 'react-redux';
import {
    modificaConsult, modificaDispConsult, modificaNumConsult, modificaQuantCompra
} from '../../redux/actions/ConsultActions';


const BuyConsult = (props) => {

    function addCompra() {
        if (props.qnt_compra <= 0 || props.qnt_compra === '') {
            alert("Digite uma quantidade válida");
        } else {
            //ADICIONANDO NO BANCO DE DADOS FIREBASE
            db.ref('/COMPRA').push({
                QUANTIDADE: props.quant_compra,
                DATA: data(),
                VALOR: sale(props.num_consults, props.quant_compra).toFixed(2)
            });

            //ALERTA SIMPLES DE CONCLUSÃO
            alert(" Compra feita no valor de " + sale(props.num_consults, props.quant_compra).toFixed(2));

            //ATUALIZAR OS VALORES
            UpdateValues();
        }
    }

    function UpdateValues() {
        props.modificaDispConsult(parseInt(props.disp_consults) + parseInt(props.quant_compra));
        props.modificaNumConsult(parseInt(props.num_consults) + parseInt(props.quant_compra));
        props.modificaQuantCompra(0);
        console.log("Quantidade disponivel" + props.disp_consults);
    }


    return (
        <Container>
            <Row>
                <Col sm={12} md={3}>
                    <Card className="text-center Card-buy">
                        <Card.Header>Comprar</Card.Header>
                        <Card.Body>
                            <Card.Title> Adquira mais consultas</Card.Title>
                            <div className="ui form">
                                <div className="field">
                                    <label>Quantidade</label>
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
                <Col sm={12} md={3} className="margin">

                </Col>
                <Col sm={12} md={3} className="margin">
                    <Row>
                        <PriceConsults
                            quantidade="3000"
                            valor={sale(props.num_consults, props.quant_compra).toFixed(2)}
                        />
                        <button onClick={() => { addCompra() }} class="ui massive primary basic button">Comprar</button>
                    </Row>
                </Col>
            </Row>

        </Container>

    );
};

//USANDO REDUX
const mapStateToProps = state => (
    {
        consult: state.ConsultReducer.consult,
        num_consults: state.ConsultReducer.num_consults,
        disp_consults: state.ConsultReducer.disp_consults,
        quant_compra: state.ConsultReducer.quant_compra,

    }
)
export default connect(mapStateToProps, {
    modificaConsult, modificaDispConsult, modificaNumConsult, modificaQuantCompra,
})(BuyConsult);
