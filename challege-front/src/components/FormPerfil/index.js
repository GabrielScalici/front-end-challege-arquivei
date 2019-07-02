import React from 'react';
import { CheckCnpj } from '../CheckCnpj';


//REDUX
import { connect } from 'react-redux';
import {
    modificaNameUser, modificaEmailUser, modificaCnpjUser
} from '../../redux/actions/UserActions';

//import '../../Styles.css';
import './FormPerfil.css';
import { Container, Form, Button } from 'react-bootstrap';

const FormPerfil = (props) => {
    console.log(props);

    return (
        <Container className="Container-form" >
            <form className="ui form">
                <div className="field">
                    <label>Nome</label>
                    <input type="text" name="name" placeholder="Nome Completo" value={props.name_user}
                        onChange={text => props.modificaNameUser(text.target.value)}
                    />
                </div>
                <div className="field">
                    <label>E-mail</label>
                    <input type="email" name="email" placeholder="E-mail" value={props.email_user}
                        onChange={text => props.modificaEmailUser(text.target.value)}
                    />
                </div>
                <div className="field">
                    <label>CNPJ</label>
                    <input type="text" name="cnpj" placeholder="CNPJ" value={props.cnpj_user}
                        onChange={text => {
                            if (CheckCnpj(text)) {
                                props.modificaCnpjUser(text.target.value)
                            }
                        }}
                    />
                </div>
                <button className="ui button" type="submit"
                    onClick={() => { }}
                > Salvar </button>
            </form>
        </Container>
    );
};

//USANDO REDUX
const mapStateToProps = state => (
    {
        name_user: state.UserReducer.name_user,
        email_user: state.UserReducer.email_user,
        cnpj_user: state.UserReducer.cnpj_user,
    }
)
export default connect(mapStateToProps, {
    modificaNameUser, modificaEmailUser, modificaCnpjUser
})(FormPerfil);
