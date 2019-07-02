//ESTADO INICIAL
const INITIAL_STATE = {
    consult: [],
    num_consults: '',
}

export default(state = INITIAL_STATE, action) => {
    //IDENTIFICANDO ACTION
    if(action.type == 'MODIFICA_CONSULT'){
        return { ...state, consult: action.payload }
    }
    if(action.type == 'MODIFICA_NUM_CONSULTS'){
        return { ...state, num_consults: action.payload }
    }

    return state;
}