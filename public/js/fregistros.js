
const form_instalacion = document.querySelectorAll('.fmi');
const form_service = document.querySelectorAll('.fms');
const form_datos = document.querySelectorAll('.fmd');

const selector = document.querySelector('.form-select');


window.addEventListener('load', function() {
    MostrarOcultarInputs();
});

function MostrarOcultarInputs(){
    for (var i = 1; i < 11; i++){
        let inp = ".inp-form-" + i
        let inputsGroup = document.querySelector(inp);

        switch (selector.value) {

            case "Instalacion" :
                if (inputsGroup.classList.contains('fmi')){
                    inputsGroup.classList.remove('d-none');
                }else{
                        inputsGroup.classList.add('d-none');
                }
                break;
            case "Service" :
                if (inputsGroup.classList.contains('fms')){
                    inputsGroup.classList.remove('d-none');
                }else{
                        inputsGroup.classList.add('d-none');
                }
                break;
            case "Solicitar datos" :
                if (inputsGroup.classList.contains('fmd')){
                    inputsGroup.classList.remove('d-none');
                }else{
                        inputsGroup.classList.add('d-none');
                }
                break;
            default :
                inputsGroup.classList.add('d-none');
                break;
        }
}
}

function agregarInput(){
    for (var i = 2; i < 6; i++){
        let inp = ".inp-" + i
        let inputsGroup = document.querySelector(inp);

        if (inputsGroup.classList.contains('d-none')){
            inputsGroup.classList.remove('d-none');
            break;
        }
    }
}

function agregarInputR(){
    for (var i = 6; i < 10; i++){
        let inp = ".inp-" + i
        let inputsGroup = document.querySelector(inp);

        if (inputsGroup.classList.contains('d-none')){
            inputsGroup.classList.remove('d-none');
            break;
        }
    }
}

function quitarInput(x){
    let inp = ".inp-" + x
    const inputsGroup = document.querySelector(inp);
    inputsGroup.classList.add('d-none');
}


