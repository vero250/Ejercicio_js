const alertaDeValidacionMensaje= document.getElementById("alertaDeValidacionMensaje");
const btnBorrar= document.getElementById("btnBorrar");

window.addEventListener("load",function (event){
    if (this.localStorage.getItem("nombre")!=null){
        alertaDeValidacionMensaje.innerHTML = `Hola <strong>${this.localStorage.getItem("nombre")}</strong>, bienvenido/a de nuevo`;
    }// if (nombre)!=null
    alertaDeValidacionMensaje.style.display= "block";
});//load

btnBorrar.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.removeItem("nombre");
    location.href= "welcome.html";
})