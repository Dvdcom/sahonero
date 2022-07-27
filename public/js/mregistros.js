$(document).ready(function () {
    $('#miTablet').DataTable({
        "lengthMenu": [ 15, 20, 50, 75, 100 ],
        "order": [ 0, 'desc' ],
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

});

selRegistro = function(id,tipo,nombre,apellido,equipoi,equipor,comentario){
    $('#id').val(id);
    $('#tipo').val(tipo);
    $('#nombre').val(nombre);
    $('#apellido').val(apellido);
    $('#equipoi').val(equipoi);
    $('#equipor').val(equipor);
    $('#comentario').val(comentario);
};

$(function() {
    $('#datepicker').datepicker();
    $('#datepicker2').datepicker();
});
