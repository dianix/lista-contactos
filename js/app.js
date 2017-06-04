var cargarPagina = function () {
    cantidadContactos();
    //var $datosContacto = $("#datosContacto");
    //$datosContacto.submit(nuevoContacto); <-- problemas con el submit
    var $enviarDatos = $("#enviarDatos");
    $enviarDatos.click(nuevoContacto);

    var $contacto = $("#contacto");
    $contacto.keyup(validacionNombre);

    //para aplicar la función borrarContacto a la tarjeta de ejemplo
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
    //llamar elementos
    var $listaContactos = $("#listaContactos");
    var $nombreContacto = $("#contacto");
    var $telContacto = $("#telefono");
    var $enviarDatos = $("#enviarDatos");
    // crear tarjeta nuevo cotacto
    var $tarjetaContacto = $("<article />").addClass("jumbotron");
    var $tarjetaCerrar = $("<button/>").addClass('close glyphicon glyphicon-remove').attr('aria-label', 'Close');
    $tarjetaCerrar.click(borrarContacto);
    var $tarjetaNombre = $("<h4 />").text($nombreContacto.val());
    var $tarjetaTel = $("<p />").text($telContacto.val());
    // agregar datos a tarjeta y tarjeta a lista
    $tarjetaContacto.append($tarjetaCerrar);
    $tarjetaContacto.append($tarjetaNombre);
    $tarjetaContacto.append($tarjetaTel);
    $listaContactos.append($tarjetaContacto);    
    limpiarDatos();    
    // para actualizar el contador
    cantidadContactos();
};

var limpiarDatos = function(){
    $("#contacto").val("");
    $("#telefono").val("")
}

var borrarContacto = function () {
    $(this).parent().remove();
    // para actualizar el contador
    cantidadContactos();
};

var validacionNombre = function () {
    if ($(this).val().trim().length > 0 && $(this).val().trim().length < 20) {
        var $telefono = $("#telefono");
        $telefono.keyup(validacionTelefono);
    }
};

var validacionTelefono = function () {
    var $numero = $(this);
    var $enviarDatos = $("#enviarDatos")
    if ($numero.val().length === 10)
        $enviarDatos.removeAttr("disabled");
    else {
        $enviarDatos.attr("disabled", true);
    }

};

$(document).ready(cargarPagina);
