import React from 'react';
import { Container } from 'react-bootstrap';

//COMPONENTES
import TitleContainer from '../TitleContainer';

//FIREBASE
import { db } from '../../utils/firebase';

//REDUX
import { connect } from 'react-redux';
import {
    modificaNameUser, modificaEmailUser, modificaCnpjUser
} from '../../redux/actions/UserActions';

import '../../Styles.css';
//import './FormPerfil.css';

const FormPerfil = (props) => {

    function addUser(cnpj) {
        if (props.name_user === '' || props.cnpj_user === '' || props.email_user === '') {
            alert("Por favor, não deixe campos em branco");
            return false;
        }
        //ADICIONANDO NO BANCO DE DADOS FIREBASE
        db.ref('/USER').push({
            NAME: props.name_user,
            EMAIL: props.email_user,
            CNPJ: props.cnpj_user,
        });

        //ALERTA SIMPLES DE CONCLUSÃO
        alert("Usuário cadastrado com sucesso!");
    }

    return (
        <div>
            <TitleContainer title="Informações Pessoais" />
            <Container className="Container-form" >
                <form className="ui form" onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}>
                    <div className="field">
                        <label className="roboto dark">Nome</label>
                        <input type="text" name="name" placeholder="Nome Completo" value={props.name_user}
                            onChange={text => props.modificaNameUser(text.target.value.toUpperCase())}
                        />
                    </div>
                    <div className="field">
                        <label className="roboto dark">E-mail</label>
                        <input type="email" name="email" placeholder="E-mail" value={props.email_user}
                            onChange={text => props.modificaEmailUser(text.target.value.toLowerCase())}
                        />
                    </div>
                    <div className="field">
                        <label className="roboto dark" >CNPJ</label>
                        <input type="text" name="cnpj" placeholder="CNPJ" value={props.cnpj_user}
                            onChange={text => {
                                props.modificaCnpjUser(text.target.value)
                            }}
                        />
                    </div>
                    <button className="ui button"
                        onClick={() => addUser(props.cnpj_user.toString())}
                    > Salvar </button>
                </form>
            </Container>
        </div>
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
