export const modificaConsult = (text) => {
    //RETORNA UMA ACTION
    console.log(text);
    return{
        type: 'MODIFICA_CONSULT',
        payload: text,
    }
}

export const modificaNumConsult = (text) => {
    //RETORNA UMA ACTION
    console.log(text);
    return{
        type: 'MODIFICA_NUM_CONSULTS',
        payload: text,
    }
}

export const modificaDispConsult = (text) => {
    //RETORNA UMA ACTION
    console.log(text);
    return{
        type: 'MODIFICA_DISP_CONSULTS',
        payload: text,
    }
}