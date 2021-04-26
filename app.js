/*
let fs = require('fs'); 

let heroes = require('./superheroes');


let datos = fs.readFileSync(__dirname +'/prueba.txt','utf-8');

console.log(datos);

console.log(heroes);

let moduloNativo = require('http');
let moduloInstalado = require('axios');
let moduloPropio = require('./miFuncion');


let moment = require('moment');

console.log(moment)



function sumar (numeroA, numeroB){

    return numeroB + numeroA
};


console.log(sumar(2,2));




function ejemplo() {
    return 'hola, soy una funcion';
   
};

console.log(ejemplo);


function esPar (n){
    return  (n % 2) == 0
};

console.log(esPar(7));


 let anterior = function anterior (numero){
    return --numero
    };
    console.log(anterior(10));

 let triple = function triple (numero){
        return numero * 3
    };
    console.log(triple(10));

 let anteriorDelTriple = function anteriorDelTripe (numero){
   return triple (numero)- anterior (numero)
 };
console.log(anteriorDelTriple(10));


function puedePasar(nombre) {
    
     if (nombre === 'Cosme Fulanito'){
         
    console.log('false');
    }else{
      console.log('true') ;
    };
    
};

console.log(puedePasar('Cosme Fulanito'))


let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
  let fraseNueva = arrayFrase.join(' ');
  console.log(fraseNueva);



  let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]
;
 
estudiantes.push(
    {nombre:'Juan',
     promedio : 5 , 
     curso : 'Ios'
  } 
)
estudiantes.push(
    {nombre:'Miguel',
     promedio : 2 , 
     curso : 'Android'
  } 
)


let estudiantes = [
    {
        nombre: 'Alvaro',
        promedio : 9,
        curso : 'Android',
    },
    {
        nombre: 'Daniel',
        promedio : 6,
        curso : 'Full Stack',
    },
    {
        nombre: 'Alexis',
        promedio : 3,
        curso : 'iOS',
    },
]

let alumnoDeBaja = estudiantes.shift();
console.log(estudiantes);



let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    }
  ]
  estudiantes.unshift ({
    nombre: "Mariana",
  
  promedio: 9,
  
  curso: "Full Stack"
  });
  estudiantes.unshift ({
  nombre: "Francisco",
  
  promedio: 2,
  
  curso: "Android"
  
  });

  
  
  
  let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]
  estudiantes.push(
    {
      nombre:'Juan',
      promedio : 5 , 
      curso : 'Ios'
    } ,
    )
    estudiantes.push(
      {
        nombre:'Miguel',
        promedio : 2 , 
        curso : 'Android'
      } 
      );
      
      function dominio(A ="http://www."){
      console.log(estudiantes);
      
      return A + "digitalhouse.com.ar"
    };
    console.log(dominio())
      
    function reemplazoFastFast(frase, palabra1, palabra2){
      frase = "Este texto es actual",
      palabra1 = "actual",
      palabra2 = "posterior",
    };
    let fraseFinal = frase.replace("actual","posterior")
    console.log(fraseFinal)
    
    
    function menciona(texto, palabra){
      texto ='Existen muchos lenguajes de programación y JavaScript es uno de ellos';
      palabra = 'Programación';
      return  texto.indexOf(palabra) <0  ;
      
    };
    
    
    console.log(menciona())
    
    function ejemplo() {
    return 'hola, soy una funcion'
    };
     console.log(ejemplo())
     
     function loro(){
       for(let i = 1; i <= 5; i ++) 
       console.log('El loro, repite'+ i)
       
      }
      
      function reemplazoFastFast(p1, p2){
        //texto: 'Este texto es mala onda';
        return p1 + p2
        
        console.log(reemplazoFastFast(10, 10));
      };
      
      
      
      function suma(a, b){
        return a + b
      };
      
      console.log(suma(10,5));
      */ 
     function reemplazoFastFast(frase, p1, p2){
  frase:'Este texto es mala onda';
        p1:'mala';
        p2:'buena';
return frase.replace(p1,p2);
console.log(frase);


 };


      
        

    


