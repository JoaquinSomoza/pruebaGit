let fechaActual = new Date(1994, 10, 23);

/* console.log(fechaActual.getFullYear()); */ //año.
/* console.log(fechaActual.getMonth()) ;*/ //mes, enero es 0.
/* console.log(fechaActual.getDay()); */ //domingo es 0.
/* console.log(fechaActual.getDate()); */ //dia del mes en el que estoy

let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let dia = fechaActual.getDate();

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log("Hoy es el " + dia + " de " + meses[mes] + " de " + anio + ".");
