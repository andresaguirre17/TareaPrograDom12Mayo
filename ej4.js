function CelsiusFarenheit(){
var celsius = prompt('Introduce cuantos grados Celsius quieres convertir')
var farenheit = (celsius*9/5)+32
return farenheit

}

result= CelsiusFarenheit()
document.write('Los grados Celsius insertados equivalen a ',result+' '+'grados Farenheit')


