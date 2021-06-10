var items = ['Marco', 'Paolo', 'Giulia', 'Francesca', 'Adele', 'Luigi'];

var a = parseInt(prompt('Inserisci un numero minimo' + items.length));
var b = parseInt(prompt('Inserisci un numero massimo' + items.length));

while (a>b || b > items.length){
    alert('Attenzione! A deve essere minore di B');
    a = parseInt(prompt('Inserisci un numero minimo' + items.length));
    b = parseInt(prompt('Inserisci un numero massimo' + items.length));
}
console.log(getRangeArr(items, a, b));

function getRangeArr (array, min, max){
    var newItems = [];
    for(var i = min-1; i < max; i++){
        newItems.push(array[i]);
    }
    return newItems;
}