// Funcion 1 que sume todos los numeros de un array

function sumarNumeros(lista) {
    var suma = 0;
    
    for (var i = 0; i < lista.length; i++) {
      suma = suma + lista[i];
    }
    
    return suma;
  }
  
  // Ejemplo de uso
  var numeros = [1, 2, 3, 4, 5];
  var resultado = sumarNumeros(numeros);
  document.write("La suma de los elementos de la lista es:", resultado);
  

  
  