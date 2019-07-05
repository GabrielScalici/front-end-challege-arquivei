export const modificaNameCard = (text) => {
    //RETORNA UMA ACTION
    console.log(text);
    return{
        type: 'MODIFICA_NAME_CARD',
        payload: text,
    }
}

export const modificaNumCard = (text) => {
    //RETORNA UMA ACTION
    console.log(text);
    return{
        type: 'MODIFICA_NUM_CARD',
        payload: text,
    }
}

export const modificaValidCard = (text) => {
    //RETORNA UMA ACTION
    console.log(text);
    return{
        type: 'MODIFICA_VALID_CARD',
        payload: text,
    }
}

export const modificaCvvCard = (text) => {
    //RETORNA UMA ACTION
    console.log(text);
    return{
        type: 'MODIFICA_CVV_CARD',
        payload: text,
    }
}

export const modificaSaveCard = (text) => {
    //RETORNA UMA ACTION
    console.log(text);
    return{
        type: 'MODIFICA_SAVE_CARD',
        payload: text,
    }
}