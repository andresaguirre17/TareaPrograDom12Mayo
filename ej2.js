function factorial(n){
    var fact=1;
    for(var i = 1; i<=n;i++){
        fact=fact*i;
    }
    return fact;
}
n = parseInt(prompt('Introduzca un numero :'));
document.write('El valor factorial es---> '+factorial(n));