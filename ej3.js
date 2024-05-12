function esPrimo() {
    var n = parseInt(prompt("Introduce un número:")); 
    var contador = 0;

    while (n > 1) {
        if (n % 1 === 0 && n % n === 0) {
            contador += 1;
        }
        n -= 1;
    }

    if (contador === 2) {
        document.write('El número es primo');
    } else {
        document.write('El número no es primo');
    }
}

esPrimo();



