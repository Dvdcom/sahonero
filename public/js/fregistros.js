
const form_instalacion = document.querySelectorAll('.fmi');
const form_service = document.querySelectorAll('.fms');
const form_datos = document.querySelectorAll('.fmd');

const selector = document.querySelector('.form-select');
let i = 2;

window.addEventListener('load', function() {
    i = 2;
    MostrarOcultarInputs();
});

function MostrarOcultarInputs(){
    if (selector.value === "Instalacion") {

        form_service.forEach(function(elemento){
            elemento.classList.add('d-none');
        });
    
        form_datos.forEach(function(elemento){
            elemento.classList.add('d-none');
        });
    
        form_instalacion.forEach(function(elemento){
            elemento.classList.remove('d-none');
        });
    }
    else if (selector.value === "Service"){
    
        form_instalacion.forEach(function(elemento){
            elemento.classList.add('d-none');
        });
    
        form_datos.forEach(function(elemento){
            elemento.classList.add('d-none');
        });
    
        form_service.forEach(function(elemento){
            elemento.classList.remove('d-none');
        });
    }else if (selector.value === "Solicitar datos"){
    
        form_instalacion.forEach(function(elemento){
            elemento.classList.add('d-none');
        });
    
        form_service.forEach(function(elemento){
            elemento.classList.add('d-none');
        });
    
        form_datos.forEach(function(elemento){
            elemento.classList.remove('d-none');
        });
    }else{
        form_instalacion.forEach(function(elemento){
            elemento.classList.add('d-none');
        });
    
        form_service.forEach(function(elemento){
            elemento.classList.add('d-none');
        });
    
        form_datos.forEach(function(elemento){
            elemento.classList.add('d-none');
        });
    }
}

function contarInputs(){
    let x = 0
    let inputsI = document.querySelectorAll('.inpi');
    inputsI.forEach(function(elemento){
        if (elemento.classList.contains('d-none')) {
            x = x + 1;
        }
    });
    return x
}

function agregarInput(){

    if ( contarInputs() != 0){
        
        let inp = ".inp-" + i
        const inputsGroup = document.querySelector(inp);
        inputsGroup.classList.remove('d-none');
        i= i+1;
    }


}
//contar inputs de equipos
function quitarInput(x){
    let inp = ".inp-" + x
    const inputsGroup = document.querySelector(inp);
    inputsGroup.classList.add('d-none');
    i=i-1
}


