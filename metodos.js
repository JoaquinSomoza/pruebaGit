let notas = [10, 4, 5, 8, 9, 2, 7];

let notasHastaEl100 = notas.map(function (numero) {
    return numero * 10;
});
/* .map genera un nuevo array */
/* console.log(notasHastaEl100); */

let notasAprobadas = notas.filter(function (numero) {
    return numero >= 7;
})
/* .filter tambien genera un nuevo array */
/* console.log(notasAprobadas); */

let sumaNotas = notas.reduce(function (estado, numero) {
    return estado + numero
});
/* .reduce toma un conjunto de datos y devuelve un dato unico */
/* console.log(sumaNotas); */

notas.forEach(function (valor, indice) {
    console.log("En la posición " + indice + " tengo el valor " + valor);
})
/* si se quiere operar cada elemento del array y tomar como parametro el valor e indice de c/u se usa forEach*/
