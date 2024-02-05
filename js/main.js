//challenge Alura Oracle LATAM


// llaves para encriptacion
const llaves ={
 "e" : "enter",
 "i" : "imes",
 "a" : "ai",
 "o" : "ober",
 "u" : "ufat"

}

// Funcion para Ocultar Elementos al empezar 

function ocultarElementos(event){   

    document.getElementById('alura-boy').style.display = 'none'; 
    document.getElementById('mensaje-alerta').style.display = 'none'; 
    document.getElementById('alerta').style.display = 'none';    
    document.getElementById('btn-copiar').style.display = 'block';
   
}

//Fucion para Encriptar Texto

function encriptar(){
    let textOriginal =  document.getElementById('texto-original').value;
    let textEncriptado = document.getElementById('texto-encriptado');

    textEncriptado.textContent = textOriginal.split(" ").map(palabra => {
        return palabra.replace(/a/g, 'ai')
                      .replace(/e/g, 'enter')
                      .replace(/i/g, 'imes')
                      .replace(/o/g, 'ober')
                      .replace(/u/g, 'ufat');  
    }).join(" ");
}


/*textEncriptado.textContent = textOriginal.replace(/[aeiou]/g, function(match){
        switch(match){
            case 'a':
                return 'ai';

            case 'e':
                return 'enter';

            case 'i':
                return 'imes';

            case 'o':
                return 'ober';

            case 'u':
                return 'ufat'; 

            default:
                return match;
        }
    });    
    */

 //Funcion para Desencriptar texto 

function desEncriptar(){
    let textOriginal =  document.getElementById('texto-original').value;
    let textEncriptado = document.getElementById('texto-encriptado');
    
        textEncriptado.textContent = textOriginal.split(" ").map(palabra => {
            return palabra.replace(/ufat/g, 'u') 
                          .replace(/ober/g, 'o')
                          .replace(/imes/g, 'i')
                          .replace(/enter/g, 'e')
                          .replace(/ai/g, 'a');
                          

        }).join(" ");
     
}

//Funcion para Copiar texto encriptado

function copyText(){
    let textoCopia =  document.getElementById('texto-encriptado');
    textoCopia = textoCopia.innerText;
    navigator.clipboard.writeText(textoCopia);
}

//Funcion para mostrar elementos, en PAUSA 

function mostrarElementos(){
   document.getElementById('alura-boy').style.display = '';
        document.getElementById('mensaje-alerta').style.display = '';
        document.getElementById('alerta').style.display = '';
        document.getElementById('btn-copiar').style.display = 'none';
}


// Funcion para ocultar author 

window.addEventListener('scroll', function(){
    if( window.scrollY < 50){
        document.getElementById('developer').style.display = 'none';
    } else {
        document.getElementById('developer').style.display = "block";
    }

})