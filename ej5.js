function calcularMCD() {
    var a = parseInt(prompt("Introduce el primer número:"));
    var b = parseInt(prompt("Introduce el segundo número:"));
    var mcd = 1;
    
    for (var i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            mcd = i;
        }
    }
    
    return mcd;
}

var mcd = calcularMCD();
document.write("El MCD es:", mcd);

