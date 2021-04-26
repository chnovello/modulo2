const { clear } = require('console');
let fs = require('fs') ;
const { clearScreenDown } = require('readline');

let tareas = fs.readFileSync('tareas.json', 'utf-8');


//let datosJS = JSON.parse(tareas)

tareas = JSON.parse(tareas)

//console.log(tareas)


let accion = (process.argv[2]);

//console.log(accion)

switch (accion){
     case 'listar':
        console.log(tareas);
       // let tareas = funcionesDetareas.listar();
       // tareas.forEach(element =>{
        //  console.log('La tarea '+ element.titulo + ' se encuentra '+ element.Estado);
        //});
        break;
      case undefined:
        console.log('****************************************');
        console.log('​Atención - Tienes que pasar una acción​.');
        break;
        default:
            console.log('****************************************');
            console.log('​No entiendo qué quieres hacer');


}

//function escribirJSON