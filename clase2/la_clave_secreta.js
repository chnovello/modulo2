
// la clave secreta

function laClaveSecreta(pass) {
    let frase = "";
    
    var x = pass.length
    for (x = pass.length -1; x >= 0; x --) {
      if(pass[x] == "*"){
         frase += " ";
      }
      else{
        frase = frase + pass[x];  
      } 
    }
    return frase;
  }

  console.log(laClaveSecreta(["a", "", "d", "a", "r", "f", "", "i", "c", "", "s", "e", "d", " ", "e", "", "v", "a", "l", "C"]));
 
 