const btnGuardar= document.getElementById("btnGuardar");
const alertaDeValidacion= document.getElementById("alertaDeValidacion");
const alertaDeValidacionTexto= document.getElementById("alertaDeValidacionTexto")
const txtNombre= document.getElementById("txtNombre");



btnGuardar.addEventListener("click", function(event){
    event.preventDefault();
    alertaDeValidacion.innerHTML = "";
    alertaDeValidacion.style.display = "none";
    
    if(txtNombre.value.length<3){
        txtNombre.style.border = "solid red medium";
        alertaDeValidacion.innerHTML = "El <strong> Nombre </strong> no es correcto <br>";
        alertaDeValidacion.style.display = "block";
        return false;
    }//if
    localStorage.setItem("nombre", txtNombre.value);
})// btnGuardar
    
    
    