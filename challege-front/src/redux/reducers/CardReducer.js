//ESTADO INICIAL
const INITIAL_STATE = {
    name_card: '',
    num_card: '',
    valid_card: '',
    cvv_card: '',
    save_card: false
}

export default(state = INITIAL_STATE, action) => {
    //IDENTIFICANDO ACTION
    if(action.type === 'MODIFICA_NAME_CARD'){
        return { ...state, name_card: action.payload }
    }
    if(action.type === 'MODIFICA_NUM_CARD'){
        return { ...state, num_card: action.payload }
    }
    if(action.type === 'MODIFICA_VALID_CARD'){
        return { ...state, valid_card: action.payload }
    }
    if(action.type === 'MODIFICA_CVV_CARD'){
        return { ...state, cvv_card: action.payload }
    }
    if(action.type === 'MODIFICA_SAVE_CARD'){
        return { ...state, save_card: action.payload }
    }

    return state;
}