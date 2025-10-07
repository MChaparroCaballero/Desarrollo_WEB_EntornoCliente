function validacion(){
    
    do{
        const respuesta = prompt("Meteme una contraseña ");
        if(respuesta.length>=8 && /\d/.test(respuesta))
        console.log("contraseña valida");
    else{
        console.log("contraseña invalida");
    }
    }
    while(!(respuesta.length>=8 && /\d/.test(respuesta)));
}


validacion();