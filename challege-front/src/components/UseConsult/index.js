import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import axios from 'axios';

//REDUX
import { connect } from 'react-redux';
import {
    modificaConsult, modificaDispConsult, modificaNumConsult, modificaLastConsult, modificaFieldConsult
} from '../../redux/actions/ConsultActions';

const UseConsult = (props) => {

    async function UseConsult(field_consult) {
        if (props.disp_consults <= 0) {
            alert("Desculpe, você precisa recarregar suas consultas");
        } else {
            //alert("Consulta realizada com sucesso");

            try {
                const response = await axios.get('https://api.github.com/users/' + field_consult);
                console.log(response);
                props.modificaDispConsult(parseInt(props.disp_consults) - 1);
                props.modificaConsult(parseInt(props.consult) + 1);

                alert(response);
            } catch (error) {
                alert(error);
                console.error(error);
            }

        }
    }

    return (
        <Container>
            <Container>
                <Card className="text-center">
                    <Card.Header>Consultar</Card.Header>
                    <Card.Body>
                        <Card.Title> GitHUb</Card.Title>
                        <Card.Text>
                            Busca um usuário do github
                </Card.Text>
                        <div className="ui form">
                            <div className="field">
                                <label>Digite o nome do usuário Github</label>
                                <input type="text" name="name" placeholder="Consulta"
                                    onChange={(text) => {
                                        props.modificaFieldConsult(text.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <Button onClick={() => UseConsult(props.fiel_consult)} variant="primary">Consultar</Button>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    );
}

//USANDO REDUX
const mapStateToProps = state => (
    {
        consult: state.ConsultReducer.consult,
        num_consults: state.ConsultReducer.num_consults,
        disp_consults: state.ConsultReducer.disp_consults,
        last_consult: state.ConsultReducer.last_consult,
        field_consult: state.ConsultReducer.fiel_consult,

    }
)
export default connect(mapStateToProps, {
    modificaConsult, modificaDispConsult, modificaNumConsult, modificaLastConsult, modificaFieldConsult
})(UseConsult);
