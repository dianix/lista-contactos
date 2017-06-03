var cargarPagina = function () {
    cantidadContactos();
    var $datosContacto = $("#datosContacto");
    //$datosContacto.submit(nuevoContacto);
    var $enviarDatos = $("#enviarDatos");
    $enviarDatos.click(nuevoContacto);
    
    $("article button.close").click(borrarContacto);
};

(function () {
    var contadorContactos = 0;
})();

var cantidadContactos = function () {
    var $listaContactos = $("#listaContactos");
    var $numeroContactos = $("#numeroContactos");
    contadorContactos = $listaContactos.children().length;
    $numeroContactos.text(contadorContactos);
};

var nuevoContacto = function (e) {
    e.preventDefault;
    var $listaContactos = $("#listaContactos");
    var $nombreContacto = $("#contacto");
    var $telContacto = $("#telefono");
    var $enviarDatos = $("#enviarDatos");

    var $tarjetaContacto = $("<article />").addClass("jumbotron");
    var $tarjetaCerrar = $("<button/>").addClass('close glyphicon glyphicon-remove').attr('aria-label','Close');
    $tarjetaCerrar.click(borrarContacto);
    var $tarjetaNombre = $("<h4 />").text($nombreContacto.val());
    console.log($nombreContacto.val())
    var $tarjetaTel = $("<p />").text($telContacto.val());

    $tarjetaContacto.append($tarjetaCerrar);
    $tarjetaContacto.append($tarjetaNombre);
    $tarjetaContacto.append($tarjetaTel);
    $listaContactos.append($tarjetaContacto);    
    
    cantidadContactos();
};

var borrarContacto = function () {
    $(this).parent().remove();
    cantidadContactos();
};

$(document).ready(cargarPagina);
