
const form_instalacion = document.querySelectorAll('.fmi');
const form_service = document.querySelectorAll('.fms');
const form_datos = document.querySelectorAll('.fmd');

const selector = document.querySelector('.form-select');

selector.addEventListener("change", function() {
if (this.value === "Instalacion") {

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
else if (this.value === "Service"){

    form_instalacion.forEach(function(elemento){
        elemento.classList.add('d-none');
    });

    form_datos.forEach(function(elemento){
        elemento.classList.add('d-none');
    });

    form_service.forEach(function(elemento){
        elemento.classList.remove('d-none');
    });

}else if (this.value === "Solicitar datos"){

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
});
