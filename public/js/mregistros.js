$(document).ready(function () {
    $('#miTablet').DataTable({
        "lengthMenu": [ 15, 20, 50, 75, 100 ],
        "order": [0,'desc'],
        language: {
            processing: "Procesando...",
            search: "Buscar :",
            lengthMenu: "Mostrar _MENU_ entradas",
            info: "Mostrando _START_ a _END_ de _TOTAL_ entradas.",
            infoEmpty: "Mostrando 0 a 0 de 0 entradas",
            infoFiltered: "(Filtrado de _MAX_ entradas totales)",
            infoPostFix: "",
            loadingRecords: "Cargando...",
            zeroRecords: "No se encontraron registros que coincidan con la búsqueda",
                paginate: {
                        first: "Primera",
                        last: "Ultima",
                        next: "Siguiente",
                        previous: "Anterior"
                    },
            aria: {
                sortAscending: ": activer pour trier la colonne par ordre croissant",
                sortDescending: ": activer pour trier la colonne par ordre décroissant"
            }
        }
    });
    $('#btnmodal').click(function(){
        var tipo =$('this').data('tipo');
        var nombre =$('this').data('nom');
        var apellido =$('this').data('ape');
        var equipoi =$('this').data('equip');
        var equipor =$('this').data('equip2');
        var comentario =$('this').data('comentario');

        $('#tip').val(tipo);
        $('#nomb').val(nombre);
        $('#apell').val(apellido);
        $('#equi').val(equipoi);
        $('#equr').val(equipor);
        $('#com').val(comentario);
        console.log('funcion ejecutandose');
    });
});

$(function() {
    $('#datepicker').datepicker();
    $('#datepicker2').datepicker();
});


