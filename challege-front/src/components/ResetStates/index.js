import React from 'react';
import { Card, Button } from 'react-bootstrap';

//REDUX
import { connect } from 'react-redux';
import {
    modificaConsult, modificaDispConsult, modificaNumConsult, modificaLastConsult, modificaQuantCompra
} from '../../redux/actions/ConsultActions';
import {
    modificaNameCard, modificaNumCard, modificaCvvCard, modificaValidCard
} from '../../redux/actions/CardActions';
import {
    modificaNameUser, modificaEmailUser, modificaCnpjUser
} from '../../redux/actions/UserActions';

const ResetStates = (props) => {

    function Reset() {
        props.modificaNameCard('');
        props.modificaNumCard('');
        props.modificaCvvCard('');
        props.modificaValidCard('');
        props.modificaNameUser('');
        props.modificaEmailUser('');
        props.modificaCnpjUser('');
        props.modificaConsult(0);
        props.modificaDispConsult(0);
        props.modificaLastConsult('');
        props.modificaNumConsult(0);
        props.modificaQuantCompra(0);

        alert("Todos os Campos foram restaurado para o valor inicial");
        
    }

    return (
        <Card className="text-center">
            <Card.Header>Resetar</Card.Header>
            <Card.Body>
                <Card.Title> Apagar os campos do persist store</Card.Title>
                <Card.Text>
                    Resseta os campos do redux.
                </Card.Text>
                <Button onClick={() => Reset()} variant="primary">Reset</Button>
            </Card.Body>
        </Card>
    );
}

//USANDO REDUX
const mapStateToProps = state => (
    {
        consult: state.ConsultReducer.consult,
        num_consults: state.ConsultReducer.num_consults,
        disp_consults: state.ConsultReducer.disp_consults,
        last_consult: state.ConsultReducer.last_consult,
        name_card: state.CardReducer.name_card,
        num_card: state.CardReducer.num_card,
        valid_card: state.CardReducer.valid_card,
        cvv_card: state.CardReducer.cvv_card,
        name_user: state.UserReducer.name_user,
        email_user: state.UserReducer.email_user,
        cnpj_user: state.UserReducer.cnpj_user,

    }
)
export default connect(mapStateToProps, {
    modificaConsult, modificaDispConsult, modificaNumConsult, modificaLastConsult, 
    modificaNameCard, modificaNumCard, modificaCvvCard, modificaValidCard,
    modificaNameUser, modificaEmailUser, modificaCnpjUser, modificaQuantCompra
})(ResetStates);
