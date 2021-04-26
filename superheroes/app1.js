/*
function menciona(texto, palabra){
    texto: 'Existen muchos lenguajes de programación y JavaScript es uno de ellos';
    palabra: 'Programación';
    return  texto.indexOf(palabra) >0 ;
      };

      function suma(a, b){
          return a + b
        };
        
        console.log(suma(10,5));
        
        
        
        let autos = {
            marca: 'BMW',
            valor: ['US$20.000', '$ 3.000.000'],
            modelo: 2016,
            vtv: '01/05/2021',
            alerta: function(){
                return 'En mayo vence la vtv, el dia: ' + this.vtv;
            }
            
        }
        console.log(autos.alerta());
        
        function Auto(marca, valor, modelo,){
            this.marca = marca;
            this.valor = valor;
            this.modelo = modelo;
            
        }
        let nuevoAuto = new Auto('Mercedes', 'US$ 25000', '2019' );
        
        
        console.log('el nuevo auto es ' + nuevoAuto.marca);
        
        let deportista = {
            energia: 100,
            experiencia: 10,
            nombre: "Messi",
            
            entrenarHoras: function(horas, energia, experiencia){
                this.horas = horas;
                this.energia = this.energia - horas*5;
                this.experiencia = this.experiencia + horas *2;
                
                
            }
        };
        
        console.log("==Antes de comenzar entrenamiento==");
        console.log("Deportista energia: "+deportista.energia);
        console.log("Deportista experiencia: "+deportista.experiencia);
        console.log("==ENTRENANDO==");
        deportista.entrenarHoras(5);
        console.log("==FIN ENTRENAMIENTO==");
        console.log("Deportista energia: "+deportista.energia);
        console.log("Deportista experiencia: "+deportista.experiencia);
        
        
        let suma = (n1, n2) => n1 + n2;
        
        console.log(suma(2,2));
        
        let tengoQueTrabajar = dia => {
            if(dia == 'sabado' || dia == 'domingo') {
                return 'Hoy no trabajas !!';
                
            } else{
                
                return 'a laburar !!';
            }
        }
        console.log(tengoQueTrabajar('sabado'));
        
        
        let dameCinco = () => [1,2,3,4,5];
        
        
        let multiplicarPorDos =() => 123 * 2 ;
        
        
        let mostrarNombre = () =>  "Mi nombre es Hernán";
        
        let saludar = nombre => 'Hola, ' + nombre + '!';
        
        console.log(dameCinco());
        console.log(multiplicarPorDos());
        console.log(mostrarNombre());
        console.log(saludar('cmn'));
        
        let fruta = 'manzana';
        
        let resultado =  fruta == 'manzana' ? 'Genial' : 'ufa, queria manzana';
        console.log(resultado);
        
        
        
        let semaforo = 'Roo';
        
        console.log('Semaforo en ' + semaforo);
        
        switch (semaforo){
            case 'Verde':
                console.log('avanzar');
                break;
                case 'Amarillo':
                    console.log('precausion');
                    break;
                    case 'Rojo':
                        console.log('parar');
                        break;
                        default:
                            console.log ('semaforo roto');
                            break;
                        }
                        
                        
                        let dia = 'jueves'
                        
                        switch (dia) {	
                            case 'viernes' :
                                console.log('buen finde');
                                break;
                                
                                case 'lunes':
                                    console.log('buena semana');
                                    break;
                                    default:
                                        console.log('buen dia');
                                        break;
                                    }                    
                                    
                                    
                                    
                                    
                                    let fruta = 'manzana';
                                    
                                    let resultado =  fruta == 'manzana' ? 'Genial' : 'ufa, queria manzana';
                                    console.log(resultado);
                                    
                                    
                                    
                                    
                                    let bicicletaA = {
                                        rodado: 18,
                                        marca: "Mountain Bike"
                                    }
                                    let bicicletaB = {
                                        rodado: 24,
                                        marca: "Aurora"
                                    }
                                    
                                    let bicicletaConRodadoGrande = bicicletaA.rodado >= bicicletaB.rodado ? bicicletaA.marca : bicicletaB.marca; 
                                    
                                    console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande );
                                    
                                    
                                    
                                    let dia = 'lues';
                                    
                                    // function tengoClases(dia) {
                                        switch (dia) {
                                            case 'lunes':
                                                console.log('tenés clases');
                                                break;
                                                case 'miércoles':
                                                    console.log('tenés clases');
                                                    break;
                                                    case 'viernes':
                                                        console.log('tenés clases');
                                                        break;
                                                        default:
                                                            console.log('no tenés clases')
                                                            break;
                                                            
                                                        }
                                                        
                                                        */

                                    
                                        for(let i = 1; i < 6; i++)
                                        {
                                            console.log('loro '+i)
                                        }
                                                                          
                            
                            
                            
                            