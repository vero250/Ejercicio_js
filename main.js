const btnGuardar= document.getElementById("btnGuardar");
const alertaDeValidacion= document.getElementById("alertaDeValidacion");
const alertaDeValidacionTexto= document.getElementById("alertaDeValidacionTexto")
const txtNombre= document.getElementById("txtNombre");

let isValid= true;

btnGuardar.addEventListener("click", function(event){
    event.preventDefault();
    txtNombre.style.border = "";
    alertaDeValidacionTexto.innerHTML = "";
    alertaDeValidacion.style.display = "none";
    isValid= true;
    if(txtNombre.value,length<3){
        txtNombre.style.border = "solid red medium";
        alertaDeValidacionTexto.innerHTML = "El <strong> Nombre </strong> no es correcto <br>";
        alertaDeValidacion.style.display = "block";
        isValid= false;
    }
})
if (isValid){
    let row = `<tr>
             <td> Hola, ${"nombre"} bienvenido/a de nuevo</td>
             </tr> `
}