
// Obtener elementos del DOM
const form = document.querySelector("form");
const input = document.querySelector("input");
const correo = document.querySelector(".correo");
const section = document.querySelector("section");
const button = document.querySelector("button")
const muestra = document.querySelector(".muestra");
const del = document.querySelector(".del");
const confirma = document.querySelector(".guarda");
let variable = localStorage.getItem("objeto");

// Manejar el evento de enviar el formulario
button.addEventListener("click",guarda);
del.addEventListener("click",borra);

form.addEventListener("submit", (event) => {
event.preventDefault();

});


// Función para guardar el nombre guardado en localStorage
function guarda(){
  let nombre = input.value;
  let email = correo.value;
  let correoTest = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (nombre !== "" && email !==""){
    if(correoTest.test(email)){
    let objGuarda = {
      name : input.value,
      email : correo.value
  }
    confirma.innerHTML="¡Datos guardados!, recarga la página.";
    localStorage.setItem("objeto", JSON.stringify(objGuarda));
    const objetoRecuperado = JSON.parse(localStorage.getItem("objeto"));
    let space = "<br>";
    let info = objetoRecuperado.name + space + objetoRecuperado.email;
    muestra.innerHTML=(info);
  }
    else{
    confirma.innerHTML="Los datos no han podido guardarse.";
    muestra.textContent="Aquí no hay datos.";
  }
  }
  input.value="";
  correo.value="";
  
}


// Función para mostrar el nombre guardado en localStorage
window.onload = function() {
  if(variable === null){
    muestra.textContent="Aquí no hay datos.";
    
  }
  else{
    const objetoRecuperado = JSON.parse(localStorage.getItem("objeto"));
    let space = "<br>";
    let info = objetoRecuperado.name + space + objetoRecuperado.email;
    muestra.innerHTML=(info);
    
  }
};

// Función para borrar el nombre guardado en localStorage
function borra() {
  localStorage.removeItem("objeto");
  confirma.innerHTML="¡Datos borrados!, recarga la página.";
  muestra.textContent="Aquí no hay datos.";
}



