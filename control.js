function validacion() {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;
    if (usuario.length == 0 || clave.length == 0) {
        alert ("Tiene que colocar el usuario y la clave");
       
    } else {
        for (var i=0; i<=usuario.length; i=i+1) {
            if (usuario[i] == "@") {
                alert ("El formulario ya fue enviado");
                break;
            } else {
                if (i==usuario.length && usuario[i] !== "@") {
                    alert ("Debe colocar el usuario con arroba");
               
                }
            }
        }
    }
}