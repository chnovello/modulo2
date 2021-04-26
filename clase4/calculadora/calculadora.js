
function sumar(numeroA, numeroB){
    return numeroA + numeroB
};

function restar(numeroA, numeroB){
    return numeroA - numeroB
};


function multiplicar(numeroA, numeroB){
    if (numeroA == 0 || numeroB == 0)
    return 0;
 else{
     return numeroA * numeroB
 };
 }

 function dividir(numeroA, numeroB){
    if (numeroA == 0 || numeroB == 0)
    return 'No se puede dividir por 0';
 else{
     return numeroA / numeroB;

 }
}
module.exports = sumar;
