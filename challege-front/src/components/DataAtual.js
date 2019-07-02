export function data() {
    
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let date = '' + day + '/' + month + '/' + year + '';

    return date;
}