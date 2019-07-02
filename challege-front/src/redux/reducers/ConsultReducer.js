//ESTADO INICIAL
const INITIAL_STATE = {
    consult: [],
    num_consults: 0,
    disp_consults: 0,
    last_consult: '',
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

    return state;
}