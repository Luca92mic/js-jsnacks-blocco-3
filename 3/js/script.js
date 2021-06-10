var arrayUno = [1, 2, 3, 4];
var arrayDue = [5, 6, 7, 8];

var lunghezzalista

function unisciArray(a, b){
    var arrayDef = [];
    if(a.length == b.length){
        var lunghezzalista = a.length;
    
        for (var i=0; i<lunghezzalista; i++){
            arrayDef.push(a[i]);
            arrayDef.push(b[i]);
        }
        console.log(arrayDef);
    }else{
        return 'i due array non sono uguali';
    }
}

console.log(unisciArray(arrayUno, arrayDue));