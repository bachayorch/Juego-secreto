let numeroSecreto = 0;
let numeroIntentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento)
    titulo.innerHTML = texto;
    return;
}
function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Correcto lo adivinaste en ${numeroIntentos} ${(numeroIntentos === 1) ?'intento': 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
        else if (numeroDeUsuario < numeroSecreto) {
        asignarTextoElemento('p', `Incorrecto el numero es mas alto, llevas ${numeroIntentos} ${(numeroIntentos === 1) ?'intento': 'intentos'}`);
        }
            else {
                asignarTextoElemento('p', `Incorrecto el numero es mas bajo, llevas ${numeroIntentos} ${(numeroIntentos === 1) ?'intento': 'intentos'}`);
            }
    numeroIntentos++;
    limpiarcaja();
    return
}
function generarUnNumeroSecreto(){
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

console.log(numeroGenerado);
console.log(listaNumerosSorteados);

//si ya sorteamos todos los numeros?
if(listaNumerosSorteados.length == numeroMaximo){
  asignarTextoElemento('p','Ya se adivinaron todos los numeros posibles');  
}
else{

if(listaNumerosSorteados.includes(numeroGenerado)){
return generarUnNumeroSecreto
}
else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}
}
}
function limpiarcaja(){
   document.querySelector('#valorUsuario').value = '';
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Elige un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarUnNumeroSecreto();
    intentos = 1 ;
}
function reiniciarJuego(){
    // limpiar caja
    limpiarcaja();
    //mensaje inicio
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar boton juegos
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();