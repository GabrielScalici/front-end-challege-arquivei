export const modificaErrorAlert = (text) => {
    //RETORNA UMA ACTION
    console.log(text);
    return{
        type: 'MODIFICA_ERROR_ALERT',
        payload: text,
    }
}

export const modificaDoneAlert = (text) => {
    //RETORNA UMA ACTION
    console.log(text);
    return{
        type: 'MODIFICA_DONE_ALERT',
        payload: text,
    }
}