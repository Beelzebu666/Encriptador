//challenge Alura Oracle LATAM


//crear llaves para encriptacion

// variables y constantes 


function challenge(event){
    document.getElementById('alura-boy').style.display = 'none'; 
    document.getElementById('mensaje-alerta').style.display = 'none'; 
    document.getElementById('alerta').style.display = 'none'; 
    
    document.getElementById('texto-encriptado').innerHTML = document.getElementById('texto-original').value;
    document.getElementById('btn-copiar').style.display = 'block';
    
       
}

function mostrarElementos(){
    let texto = document.getElementById('texto-encriptado');
    let texto1 = document.getElementById('texto-original');
    if(texto.value.trim() === ''){
        document.getElementById('alura-boy').style.display = '';
        document.getElementById('mensaje-alerta').style.display = '';
        document.getElementById('alerta').style.display = '';
        document.getElementById('btn-copiar').style.display = 'none';
      
    }else{
        document.getElementById('texto-encriptado').innerHTML = document.getElementById('texto-original').value;
    }
}
