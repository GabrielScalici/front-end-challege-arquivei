import React from 'react';

//IMAGENS
import user_logo from '../../images/user.png';
import none from '../../images/none.png';

//REDUX
import { connect } from 'react-redux';
import {
    modificaNameUser, modificaEmailUser, modificaCnpjUser
} from '../../redux/actions/UserActions';

const UserRegister = (props) => {
    if (props.name_user === '' && props.email_user === '' && props.cnpj_user === '') {
        return (
            <div class="ui horizontal huge list">
                <div class="item">
                    <img class="ui avatar image" src={none} />
                    <div class="content">
                        Não há nenhum usuário cadastrado
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div class="ui horizontal huge list">
            <div class="item">
                <img class="ui avatar image" src={user_logo} />
                <div class="content">
                    <div class="header"> {props.name_user} </div>
                    {props.email_user}
                    <br />
                    {props.cnpj_user}
                </div>
            </div>
        </div>
    );
}

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
})(UserRegister);