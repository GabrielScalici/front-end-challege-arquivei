//ESTADO INICIAL
const INITIAL_STATE = {
    error_alert: false,
    done_alert: false,

}

export default(state = INITIAL_STATE, action) => {
    //IDENTIFICANDO ACTION
    if(action.type === 'MODIFICA_ERROR_ALERT'){
        return { ...state, error_alert: action.payload }
    }
    if(action.type === 'MODIFICA_DONE_ALERT'){
        return { ...state, done_alert: action.payload }
    }

    return state;
}