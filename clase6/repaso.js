function suma(n1,n2) {
    return n1+n2;
}


function calculadora(num1, num2, operacion) {
    return operacion(num1,num2);
}

// console.log(calculadora(2,6,suma));


function agregarHttp(url) {
    return  "http://" + url;
}

// function otrFuncion(params) {
//     return 
// }


// function procesar(coleccionDeUrl,callback){
    //     const acumulador = [];
    //     for (let i=0; i < coleccionDeUrl.length ; i++){
        //         acumulador[i] = callback(coleccionDeUrl[i]);
        //     }
        //     return acumulador;
        // }
        
function procesarConForeach(coleccionDeUrl,callback){
    let acumulador = [];
    coleccionDeUrl.forEach(element => {
        acumulador.push(callback(element));
    });
    return acumulador
}



let miArray = ['digitalhouse', 'otraUrl','instagram', 'google'];


let resultado = miArray.map((unaURL)=>{
    return agregarHttp(unaURL)
})


let resultadoFiltrado = miArray.filter((unItem)=>{
    return unItem.length > 7;
})


// console.log(procesar(miArray, agregarHttp));




let persona = {
    nombre: '',
    altura: 1.80,
    sitiosFavoritos: ['twitter', ...miArray]

}


console.log(persona.sitiosFavoritos);