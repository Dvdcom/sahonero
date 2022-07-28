$(document).ready(function () {
    $('#miTablet').DataTable({
        "lengthMenu": [15,20,30,50],
        "order": [ 0, 'desc' ],
        language: {
            buttons: {
                pageLength: {
                    '_': "Mostrar %d Registros",
                }
            },
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
                sortAscending: ": orden ascendente",
                sortDescending: ": orden descendente"
            }
        },
        responsive: "true",
        dom: "<'row'<'col-sm-12 col-md-6'B><'col-sm-12 col-md-6'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        buttons: [
            {
                extend: 'pageLength',
                text: 'Mas Registros',
                titleAttr: 'Mostrar Registros',
                className: 'btn btn-sm btn-info'
            },
            {
                extend: 'copy',
                text: '<i class="bi bi-clipboard-check"></i>',
                titleAttr: 'Copiar a Portapapeles',
                className: 'btn btn-sm btn-secondary'
            },
            {
                extend: 'excel',
                text: '<i class="bi bi-filetype-xlsx"></i>',
                titleAttr: 'Exportar a Excel',
                className: 'btn btn-sm btn-success'
            }
        ]
    });
});

$(window).on('resize', function () {
    var win = $(this);
    if (win.width() < 750) {
        $('.dt-buttons').addClass('d-none');
        $('.dataTables_info').addClass('d-none');
    } else {
        $('.dt-buttons').removeClass('d-none');
        $('.dataTables_info').removeClass('d-none');
    }
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
