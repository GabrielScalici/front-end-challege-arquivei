import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import axios from 'axios';

//REDUX
import { connect } from 'react-redux';
import {
    modificaConsult, modificaDispConsult, modificaNumConsult, modificaLastConsult, modificaFieldConsult,
    modificaNameConsult, modificaPhotoConsult
} from '../../redux/actions/ConsultActions';

const UseConsult = (props) => {

    async function UseConsult() {
        if (props.disp_consults <= 0) {
            alert("Desculpe, você precisa recarregar suas consultas");
        } else {
            try {
                const response = await axios.get('https://api.github.com/users/' + props.field_consult);
                console.log(props.field_consult);
                props.modificaDispConsult(parseInt(props.disp_consults) - 1);
                props.modificaConsult(parseInt(props.consult) + 1);
                props.modificaNameConsult(response.data.name);
                props.modificaPhotoConsult(response.data.avatar_url);

                alert("Consulta realizada com sucesso");

                console.log(response.data.name);
                console.log(response.data.avatar_url);

            } catch (error) {
                alert(error);
                console.error(error);
                alert("Ops, ocorreu um erro: " + error);
            }

        }
    }

    return (
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
                        <Button onClick={() => UseConsult()} variant="primary">Consultar</Button>
                    </Card.Body>
                </Card>
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
        field_consult: state.ConsultReducer.field_consult,
        name_consult: state.ConsultReducer.name_consult,
        photo_consult: state.ConsultReducer.photo_consult,

    }
)
export default connect(mapStateToProps, {
    modificaConsult, modificaDispConsult, modificaNumConsult, modificaLastConsult, 
    modificaFieldConsult, modificaNameConsult, modificaPhotoConsult
})(UseConsult);
