import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//FIREBASE
import { db } from '../../utils/firebase';

//COMPONENTES
import CardUser from '../CardUser';
import TitleContainer from '../TitleContainer';

//REDUX
import { connect } from 'react-redux';
import {
    modificaNameCard, modificaNumCard, modificaValidCard, modificaCvvCard, modificaSaveCard
} from '../../redux/actions/CardActions';

import '../../Styles.css';
import './FormCard.css';

const FormCard = (props) => {

    function addCard() {

        if (props.cvv_card === '' || props.name_card === '' || props.num_card === '' || props.num_card === '') {
            alert("Por favor, não deixe campos em branco");
            return false;
        }
        
        //ADICIONANDO NO BANCO DE DADOS FIREBASE
        db.ref('/CARD').push({
            NAME: props.name_card,
            NUM: props.num_card,
            VALID: props.valid_card,
            CVV: props.cvv_card,
        });

        //ALERTA SIMPLES DE CONCLUSÃO
        alert("Cartão cadastrado com sucesso!");
        props.modificaSaveCard(true);

    }

    return (
        <div>
            <TitleContainer title="Informações de pagamento" />
            <Container className="Container-form" >
                <Row>
                    <Col sm={12} md={6} >
                        <form className="ui form" onSubmit={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}>
                            <div className="field">
                                <label className="roboto dark" >Nome</label>
                                <input type="text" name="name" placeholder="Nome escrito no cartão" value={props.name_card}
                                    onChange={text => props.modificaNameCard(text.target.value.toUpperCase())}
                                />
                            </div>
                            <div className="field">
                                <label className="roboto dark" >Número do cartão</label>
                                <input type="text" name="num" placeholder="Número do cartão" value={props.num_card}
                                    onChange={text => props.modificaNumCard(text.target.value)}
                                />
                            </div>
                            <Row>
                                <Col>
                                    <div className="field">
                                        <label className="roboto dark" > Mês/Ano </label>
                                        <input type="text" name="valid" placeholder="Validade" value={props.valid_card}
                                            onChange={text => {
                                                props.modificaValidCard(text.target.value)
                                            }}
                                        />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="field">
                                        <label className="roboto dark" >CVV</label>
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
        save_card: state.CardReducer.save_card,
    }
)
export default connect(mapStateToProps, {
    modificaNameCard, modificaNumCard, modificaValidCard, modificaCvvCard, modificaSaveCard
})(FormCard);