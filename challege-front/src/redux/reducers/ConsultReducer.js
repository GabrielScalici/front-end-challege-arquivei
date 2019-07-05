//ESTADO INICIAL
const INITIAL_STATE = {
    consult: 0,
    num_consults: 0,
    disp_consults: 0,
    last_consult: '',
    quant_compra: 0,
    field_consult: '',
    name_consult: '',
    photo_consult: '',
}

export default(state = INITIAL_STATE, action) => {
    //IDENTIFICANDO ACTION
    if(action.type === 'MODIFICA_CONSULT'){
        return { ...state, consult: action.payload }
    }
    if(action.type === 'MODIFICA_NUM_CONSULTS'){
        return { ...state, num_consults: action.payload }
    }
    if(action.type === 'MODIFICA_DISP_CONSULTS'){
        return { ...state, disp_consults: action.payload }
    }
    if(action.type === 'MODIFICA_LAST_CONSULTS'){
        return { ...state, last_consult: action.payload }
    }
    if(action.type === 'MODIFICA_QUANT_COMPRA'){
        return { ...state, quant_compra: action.payload }
    }
    if(action.type === 'MODIFICA_FIELD_CONSULT'){
        return { ...state, field_consult: action.payload }
    }
    if(action.type === 'MODIFICA_NAME_CONSULT'){
        return { ...state, name_consult: action.payload }
    }
    if(action.type === 'MODIFICA_PHOTO_CONSULT'){
        return { ...state, photo_consult: action.payload }
    }

    return state;
}