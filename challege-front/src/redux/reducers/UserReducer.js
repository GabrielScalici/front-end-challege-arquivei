//ESTADO INICIAL
const INITIAL_STATE = {
    name_user: '',
    email_user: '',
    cnpj_user: '',
}


export default(state = INITIAL_STATE, action) => {
    //IDENTIFICANDO ACTION
    if(action.type == 'MODIFICA_NAME_USER'){
        return { ...state, name_user: action.payload }
    }
    if(action.type == 'MODIFICA_EMAIL_USER'){
        return { ...state, email_user: action.payload }
    }
    if(action.type == 'MODIFICA_CNPJ_USER'){
        return { ...state, cnpj_user: action.payload }
    }

    return state;
}