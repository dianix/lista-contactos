var cargarPagina = function () {
    cantidadContactos();
    var $datosContacto = $("#datosContacto");
    $datosContacto.submit(nuevoContacto);
};

(function () {
    var contadorContactos = 0;
});

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
    console.log($nombreContacto)

    var $tarjetaContacto = $("<article class='jumbotron' />");
    var $tarjetaCerrar = $("<button class='close' aria-label='Close' />").html("<span aria-hidden='true' />").text("&times;");
    $tarjetaCerrar.click(borrarContacto);
    var $tarjetaNombre = $("<h4 />").text($nombreContacto.val());
    var $tarjetaTel = $("<p />").text($telContacto.val());


    $tarjetaContacto.append($tarjetaCerrar);
    $tarjetaContacto.append($nombreContacto);
    $tarjetaContacto.append($telContacto);

    $listaContactos.append($tarjetaContacto);
    cantidadContactos();
};

var borrarContacto = function () {
    $(this).parent().remove();
};

$(document).ready(cargarPagina);
