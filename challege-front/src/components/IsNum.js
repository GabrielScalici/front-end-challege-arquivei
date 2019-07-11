export function isnum( text ) {
    if(text === ''){
        return true;
    }
    return !isNaN(parseFloat(text)) && isFinite(text);
}