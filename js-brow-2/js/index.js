const contenedor = document.querySelector(".tareas");
const input = document.querySelector(".input");
const add = document.querySelector(".button");
const del = document.querySelector(".delete");
const done = document.querySelector(".done");
const undone = document.querySelector(".undone");
const all = document.querySelector(".all");

let cuenta = 1;
add.addEventListener("click", agrega);
del.addEventListener("click", borrar);
contenedor.addEventListener("click", franja);
done.addEventListener("click", comp);
undone.addEventListener("click", hidd);
all.addEventListener("click",show);

function agrega(){
    
    const entrada = input.value;
    if (entrada !== ""){
        let divisor = document.createElement("DIV");
        divisor.classList.add("visible","tarea");
        divisor.id ="tarea " + cuenta;
        
        let label = document.createElement("label");
        label.classList.add("false");
        let texLabel = document.createTextNode(entrada);
        let check = document.createElement("input");
        check.type = "checkbox";
        check.classList.add("checkbox", "false", "visible");
        check.id = cuenta;
        
        label.appendChild(check);
        label.appendChild(texLabel);
        divisor.appendChild(label);
        contenedor.appendChild(divisor);
        input.value ="";
        cuenta ++;
        
    }
    
}
function borrar (){
    let check = document.querySelectorAll(".checkbox");
    check.forEach(function(checkbox){
        if (checkbox.checked) {
            checkbox.parentNode.parentNode.remove();
          }
          
    });
}

function franja (){
    let check = document.querySelectorAll(".checkbox");
    check.forEach(function(checkbox){
        if (checkbox.checked) {
            checkbox.classList.replace("false","true");
            checkbox.parentNode.classList.replace("false","is-completed");
            
        }
        else{
            checkbox.classList.replace("true","false");
            checkbox.parentNode.classList.replace("is-completed","false");
        }
    });

}
function comp(){
    let check = document.querySelectorAll(".checkbox");
    check.forEach(function(checkbox){
        if (checkbox.checked) {
            checkbox.classList.replace("hidden","visible");
            checkbox.parentNode.parentNode.classList.replace("hidden","visible");
            
        }
        else{
            checkbox.classList.replace("visible","hidden");
            checkbox.parentNode.parentNode.classList.replace("visible","hidden");
        }
    });

}
function hidd(){
    let check = document.querySelectorAll(".checkbox");
    check.forEach(function(checkbox){
        if (checkbox.checked) {
            checkbox.classList.replace("visible","hidden");
            checkbox.parentNode.parentNode.classList.replace("visible","hidden");
        }
        else{
            checkbox.classList.replace("hidden","visible");
            checkbox.parentNode.parentNode.classList.replace("hidden","visible");
        }
    });


}
function show(){
    let check = document.querySelectorAll(".checkbox");
    check.forEach(function(checkbox){
        if (checkbox.checked) {
            checkbox.classList.replace("hidden","visible");
            checkbox.parentNode.parentNode.classList.replace("hidden","visible");
        }
        else{
            checkbox.classList.replace("hidden","visible");
            checkbox.parentNode.parentNode.classList.replace("hidden","visible");
        }
    });

}