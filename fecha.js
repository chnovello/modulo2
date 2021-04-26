let fecha = new Date();

let anio = fecha.getFullYear();
let mes = fecha.getMonth();
let dia = fecha.getDate();

let meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

let fechaActual = 'Hoy es '+ dia+' de '+ meses[mes]+' de '+anio;

//console.log('Hoy es '+ dia+' de '+ meses[mes]+' de '+anio);

module.exports = fechaActual
