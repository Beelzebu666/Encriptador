//challenge Alura Oracle LATAM


// llaves para encriptacion
const llaves ={
 "e" : "enter",
 "i" : "imes",
 "a" : "ai",
 "o" : "ober",
 "u" : "ufat"

}

// variables y constantes 


function challenge(event){
    

    document.getElementById('alura-boy').style.display = 'none'; 
    document.getElementById('mensaje-alerta').style.display = 'none'; 
    document.getElementById('alerta').style.display = 'none';    
    document.getElementById('btn-copiar').style.display = 'block';
    
    
    
    
    
}

function encriptar(){
    let textOriginal =  document.getElementById('texto-original').value;
    let textEncriptado = document.getElementById('texto-encriptado');
    textEncriptado.innerHTML = textOriginal.replace('o', 'ober');

}

function desEncriptar(){
    let textOriginal =  document.getElementById('texto-original').value;
    let textEncriptado = document.getElementById('texto-encriptado');
    textEncriptado.innerHTML = textOriginal.replace('ober', 'o');

}

function copyText(){
    navigator.clipboard.writeText = document.getElementById('texto-encriptado').value;
}

function mostrarElementos(){
   document.getElementById('alura-boy').style.display = '';
        document.getElementById('mensaje-alerta').style.display = '';
        document.getElementById('alerta').style.display = '';
        document.getElementById('btn-copiar').style.display = 'none';
}
