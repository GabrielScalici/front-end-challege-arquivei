import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//FIREBASE
import { db } from '../../utils/firebase';

//COMPONENTES
import CardUser from '../CardUser';

//REDUX
import { connect } from 'react-redux';
import {
    modificaNameCard, modificaNumCard, modificaValidCard, modificaCvvCard
} from '../../redux/actions/CardActions';

//import '../../Styles.css';
import './FormCard.css';

const FormCard = (props) => {

    function addCard() {
        //ADICIONANDO NO BANCO DE DADOS FIREBASE
        db.ref('/CARD').push({
            NAME: props.name_card,
            NUM: props.num_card,
            VALID: props.valid_card,
            CVV: props.cvv_card,
        });

        //ALERTA SIMPLES DE CONCLUSÃO
        alert("Cartão cadastrado com sucesso!");

    }

    return (
        <div>
            <h2> Informações de pagamento </h2>
            <Container className="Container-form" >
                <Row>
                    <Col sm={12} md={6} >
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
                                        <div className="ui pointing red basic label">
                                            Não precisa digitar a barra
                                        </div>
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
                            <button className="ui button"
                                onClick={() => addCard()}
                            > Salvar </button>
                        </form>
                    </Col>
                    <Col sm={12} md={6}>
                        <CardUser />
                    </Col>
                </Row>

            </Container>
        </div>
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