var parola = prompt('Inserisci una parola');
function capitalize(str){
    var lettera = str[0];
    lettera = lettera.toUpperCase();
    str = str.substring(1).toLowerCase();
    str = lettera + str;
    console.log(str);
    return str;
}

console.log(capitalize(parola));