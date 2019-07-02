export const modificaNameUser = (text) => {
    //RETORNA UMA ACTION
    console.log(text);
    return{
        type: 'MODIFICA_NAME_USER',
        payload: text,
    }
}

export const modificaEmailUser = (text) => {
    //RETORNA UMA ACTION
    console.log(text);
    return{
        type: 'MODIFICA_EMAIL_USER',
        payload: text,
    }
}
export const modificaCnpjUser = (text) => {
    //RETORNA UMA ACTION
    console.log(text);
    return{
        type: 'MODIFICA_CNPJ_USER',
        payload: text,
    }
}