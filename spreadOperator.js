let peliculasAccion = ["End Game", "Iron Man 3", "Capitán América"];
let peliculasComedia = ["Mi pobre Angelito", "¿Qué paso ayer?"];

let peliculas = [...peliculasAccion, ...peliculasComedia];

console.log(peliculas)

let generoComedias = {
    nombreGenero: "Comedia",
    popularidad: 3
}
let miPobreAngelito = {
    nombre: "Mi pobre Angelito",
    duracion: 120,
    ...generoComedias
}

let quePasoAyer = {
    nombre: "¿Qué paso ayer?",
    duracion: 110,
    ...generoComedias

}

console.log(miPobreAngelito);
console.log(quePasoAyer);


/* para funcion se ponen ... para que varien la cantidad de parametros desde 1 a n. */
function peliculasVistas(...nombresDePeliculas) {
    for (let i = 0; i < nombresDePeliculas.length; i++) {
        console.log("La persona ya vió " + nombresDePeliculas[i]);
    }
}

peliculasVistas("End Game", "Iron Man 3", "Mi pobre angelito", "Batman 2");