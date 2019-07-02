import React from 'react';
import { Card, Button } from 'react-bootstrap';

//REDUX
import { connect } from 'react-redux';
import {
    modificaConsult, modificaDispConsult, modificaNumConsult, modificaLastConsult
} from '../../redux/actions/ConsultActions';

const UseConsult = (props) => {

    function UseConsult() {
        if (props.disp_consults <= 0) {
            alert("Desculpe, você precisa recarregar suas consultas");
        } else {
            alert("Consulta realizada com sucesso");
            props.modificaDispConsult(parseInt(props.disp_consults) - 1);
            props.modificaNumConsult(parseInt(props.num_consults) + 1);
        }
    }

    return (
        <Card className="text-center">
            <Card.Header>Consultar</Card.Header>
            <Card.Body>
                <Card.Title> Nota fisca eletrônica</Card.Title>
                <Card.Text>
                    (Lógica para realizar a consulta)
                </Card.Text>
                <Button onClick={() => UseConsult()} variant="primary">Consultar</Button>
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

    }
)
export default connect(mapStateToProps, {
    modificaConsult, modificaDispConsult, modificaNumConsult, modificaLastConsult
})(UseConsult);
