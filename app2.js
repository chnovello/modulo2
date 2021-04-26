const { relativeTimeRounding } = require("moment");

/*
let sumar = (numero1, numero2) => numero1 + numero2;
let restar = (numero1, numero2) => numero1 - numero2;
let multilicar = (numero1, numero2) => numero1 * numero2;
let dividir = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1, numero2, operacion) => operacion(numero1, numero2);

console.log(calculadora(18, 3, sumar));


function doble  (numeroA){
    return numeroA * 2
};
function triple (numeroA){
    return numeroA * 3 
};

function aplicarCallback( numeroA, operacion ){
    return operacion (numeroA);
}

console.log(aplicarCallback(127, triple));



function sumar (numero1, numero2){
    return numero1 + numero2
};
function restar (numero1, numero2) {
    return numero1 - numero2
};
function multilicar (numero1, numero2) {
    return numero1 * numero2
};
function dividir (numero1, numero2) {
    return numero1 / numero2
};


function calculadora (numero1, numero2, operacion) {
    return operacion(numero1, numero2);
};

console.log(calculadora(18, 3, dividir));




function agregarHttp(url) {
    return 'http://'+url
};
function procesar(["www.google.com","www.yahoo.com"], ){
    return 
    // escribí tu código aquí
    // recuerda iterar en cada uno de los elementos del array. Eso lo podes hacer utilizando...
}
let notas = [10,4,5,8,9,2,7];

let notashastaEl100 = notas.map(function(numero){
    
    return numero * 10;
});

console.log(notashastaEl100);

let notasAprobadas = notas.filter(function(numero){
    return numero >= 7; 
});

console.log(notasAprobadas);

let sumaNotas = notas.reduce(function(estado, numero){
    return estado + numero;
}
);
console.log(sumaNotas);


notas.forEach(function(valor, indice){
    console.log('En la posicion '+ indice + ' tengo el valor '+ valor);
})



let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(aprobado){
    return aprobado == true;
});

let desaprobados = estudiantes.filter(function(aprobado){
    return aprobado == false;
});
console.log(aprobados);
console.log(desaprobados);



let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

listaDeSuperMercado.forEach(function(producto){
    console.log('comprar '+producto)
    
});
let fecha = require ();

let fechaActual = new Date();

let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let dia = fechaActual.getDate();

let meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

//console.log('Hoy es '+ dia+' de '+ meses[mes]+' de '+anio);
console.log(fecha); 


let fecha = fecha.getDay();
console.log("Día: "+fecha.getDate())
let dia = fecha.getDate();
let mes = fecha.getMonth();
let anio =  fecha.getFullYear();
console.log('Hoy es el día '+dia+' del mes '+mes+' del año '+anio)

// destructuring

let cursos = ['Programacion', 'MKT', 'UX', 'Data Science', 'UX'];

let [programacion, mkt] = cursos;

console.log(mkt);


let persona = {
    nombre: 'Christian',
    apellido: 'Novello',
    edad: 46,
} ;

let {nombre, edad}= persona;

console.log(persona);
console.log(edad);



// spread Operator  // Rest parameter

let peliculasDeAccion = ['Irom Man', 'Spiderman', 'Vengadores', 'Capitan America'];
let peliculasInfantiles = ['Toy Story', 'Sherek', 'Buscando Nemo', 'La era de Hielo'];

let peliculas = [...peliculasDeAccion, ...peliculasInfantiles ];

console.log(peliculas);

let generoComedias = {
    nombreGenero : 'Comedia',
    populaidad: 3,
}

let quePasoAyer = {
    nombre: 'Que paso ayer?',
    duracion: 110,
    ...generoComedias,
}

let miPobreAngelito ={
    nombre: 'Mi pobre angelito',
    duracion: 120,
    ...generoComedias,
}

console.log(miPobreAngelito);

*/

function peliculasVistas(...nombreDePeliculas){
    for(let i = 0; i < nombreDePeliculas.length; i++){
        console.log('Ya viste '+ nombreDePeliculas[i] + ' !')
    };
}
peliculasVistas('Irom Man', 'Spiderman', 'Vengadores', 'Capitan America','Toy Story', 'Sherek', 'Buscando Nemo', 'La era de Hielo');
