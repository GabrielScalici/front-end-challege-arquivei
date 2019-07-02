import React from 'react';
import Cards from 'react-credit-cards';

import 'react-credit-cards/es/styles-compiled.css';

//REDUX
import { connect } from 'react-redux';
import {
    modificaNameCard, modificaNumCard, modificaValidCard, modificaCvvCard
} from '../../redux/actions/CardActions';

//import '../../Styles.css';
import './FormCard.css';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const FormCard = (props) => {
    return (
        <Container className="Container-form" >
            <Row>
                <Col md={6} sm={12}>
                    <form className="ui form">
                        <div className="field">
                            <label>Nome</label>
                            <input type="text" name="name" placeholder="Nome escrito no cartão" value={props.name_card}
                                onChange={text => props.modificaNameCard(text.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>Número do cartão</label>
                            <input type="text" name="num" placeholder="Número do cartão" value={props.num_card}
                                onChange={text => props.modificaNumCard(text.target.value)}
                            />
                        </div>
                        <Row>
                            <Col>
                                <div className="field">
                                    <label> Mês/Ano </label>
                                    <input type="text" name="valid" placeholder="Validade" value={props.valid_card}
                                        onChange={text => {
                                            props.modificaValidCard(text.target.value)
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col>
                                <div className="field">
                                    <label>CVV</label>
                                    <input type="text" name="código" placeholder="CVV" value={props.cvv_card}
                                        onChange={text => {
                                            props.modificaCvvCard(text.target.value)
                                        }}
                                    />
                                </div>
                            </Col>

                        </Row>
                        <button className="ui button" type="submit"
                            onClick={() => { }}
                        > Salvar </button>
                    </form>
                </Col>
                <Col md={6} sm={12}>
                    <Cards
                        number={props.num_card}
                        name={props.name_card}
                        expiry={props.valid_card}
                        cvc={props.cvv_card}
                    />
                </Col>
            </Row>

        </Container>
    );
};

//USANDO REDUX
const mapStateToProps = state => (
    {
        name_card: state.CardReducer.name_card,
        num_card: state.CardReducer.num_card,
        valid_card: state.CardReducer.valid_card,
        cvv_card: state.CardReducer.cvv_card,
    }
)
export default connect(mapStateToProps, {
    modificaNameCard, modificaNumCard, modificaValidCard, modificaCvvCard
})(FormCard);