// agregar URL
function agregarHttp (url){
    return 'http://'+ url;
};

/*
let acumulador = [];

function procesar (coleccionDeUrl,callback){
    

    for (let i=0; i < coleccionDeUrl.length; i++ ){
        acumulador.push(callback(coleccionDeUrl[i]));
    
    }
return acumulador;
}

procesar(['digitalhouse.com','vemart.com.ar'], agregarHttp);

console.log(acumulador);


let resultado = miArray.map((itemArray)=>{
    return agregarHttp(itemArray);
});

console.log(resultado);
*/

let miArray = ['digitalhouse.com','vemart.com.ar', 'Clarin.com'];
function procesarConForEach(coleccionDeUrl,callback1){
    let acumulador1 = [];
    coleccionDeUrl.foreach(elementos =>{
        acumulador1.push(callback1(elementos));
    
    } ) ;
    return acumulador1
}

console.log(procesarConForEach(miArray,agregarHttp));

