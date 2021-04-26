let fs = require('fs');


let tareas = fs.readFileSync('tareas.json', 'utf-8');


//let datosJS = JSON.parse(tareas)

tareas = JSON.parse(tareas)





module.exports = tareas;
