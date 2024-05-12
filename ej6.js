function numMayor() {
    var lista = [1, 2, 3, 4, 5];
    var maxnum = lista[0]; 

    for (var i = 1; i < lista.length; i++) {
        if (lista[i] > maxnum) {
            maxnum = lista[i]; 
        }
    }

    return maxnum;
}

var result = numMayor(); 
document.write('El número ' + result + ' es el mayor de la lista proporcionada');
