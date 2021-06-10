var parola1 = prompt('parola1');
var parola2 = prompt('parola2');

var risultato = prova(parola1, parola2);
console.log(risultato);

function prova(x,y){
    var ris;
    if (x.length ==y.length){
        ris = 'sono uguali';
    } else if (x.length > y.length){
        ris = x;
    } else {
        ris = y;
    }
    return ris;
}