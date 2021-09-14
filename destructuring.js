let cursos = ["Programación", "MKT", "UX", "Data Science", "UX"];

//Destructuracion de arrays

let [programacion, , ux] = cursos;

console.log(cursos);
console.log(programacion);
console.log(mkt);

let persona = {
    nombre: "Carli",
    edad: 26,
    domicilio: "Calle falsa 123"
}

//Destruturacion de objetos literales
let { nombre, domicilio } = persona;

console.log(persona);
console.log(nombre);
console.log(domicilio);