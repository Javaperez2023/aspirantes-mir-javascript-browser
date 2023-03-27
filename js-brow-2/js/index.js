const input = document.querySelector(".input");
const tareas = document.querySelector(".tareas");
const boton = document.querySelector(".add");
const done = document.querySelector(".done");
const undone = document.querySelector(".undone");
const delet = document.querySelector(".delete");
const all = document.querySelector(".all");
let array = [];
let cuenta = 1;

boton.addEventListener("click", agrega);
done.addEventListener("click",hechas);
undone.addEventListener("click",nohechas);
delet.addEventListener("click",borra);
all.addEventListener("click", todos);

function agrega (){
    if (input.value !== ""){  
    tarea = {
        id : cuenta,
        title : input.value,
        complete : false,
    };
    array.push(tarea);
    console.log(array);
    pinta(array);
    input.value = "";
    console.log(array);
    contador();
    }
    
}

function pinta (a){
    let arreglo = a;
    tareas.innerHTML = "";
    arreglo.forEach(function(tarea){
        let divisor = document.createElement("div");
        divisor.classList.add("visible","tarea");
        let label = document.createElement("label");
        let textLabel = document.createTextNode(tarea.title);
        let check = document.createElement("input");
        check.type = "checkbox";
        check.checked = tarea.complete;
        check.addEventListener("click",function(){
            tarea.complete = check.checked;
            console.log(array);
            if (check.checked) {
                label.classList.add("is-completed");
              } else {
                label.classList.remove("is-completed");
              }
            
        });

        label.appendChild(check);
        label.appendChild(textLabel);
        divisor.appendChild(label);
        
        if(tarea.complete){
            divisor.classList.add("complete");
            label.classList.add("is-completed");
            check.checked = true;
            
            
        }
        else{
            check.checked = false;
            
        }
        tareas.appendChild(divisor);
    });
}

function hechas (){
    let dones = array.filter(tarea => tarea.complete === true);
    console.log(dones);
    pinta(dones);
}

function nohechas (){
    let dones = array.filter(tarea => tarea.complete === false);
    console.log(dones);
    pinta(dones);
}

function borra (){
    let dones = array.filter(tarea => tarea.complete === false);
    array = dones;
    contador();
    pinta(array);
}
function todos(){
    let dones = array;
    pinta(dones);
}

function contador (){
cuenta = array.reduce(function(max, obj){
        return obj.id > max ? obj.id : max;
    },0);
    cuenta = cuenta + 1;
    console.log(cuenta);
}