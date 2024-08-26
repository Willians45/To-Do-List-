const taskInput = document.getElementById('task-input');
const addTask = document.getElementById('add-task');
const containerList = document.getElementById('dolist');

function addTaskFunction() {
    if (taskInput.value === '') {
        alert("You need to write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        containerList.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    taskInput.value = "";
    Memoria();
}

addTask.addEventListener('click', function(){
    addTaskFunction();
});
taskInput.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        addTaskFunction();
    }
});

containerList.addEventListener('click', function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("chequeado");
        Memoria();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        Memoria();
    }
}, false);

function Memoria(){
    localStorage.setItem('Memoria', containerList.innerHTML);
}
function Mostrartarea(){
    containerList.innerHTML = localStorage.getItem("Memoria");
}
Mostrartarea();