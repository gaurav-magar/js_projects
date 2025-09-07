function toggleDetails(){
    const details = document.querySelector(".details");
    details.classList.toggle("show");
}
function addTask(){
    const input = document.getElementById("new-task");
    const tasklist = document.getElementById("task-list");
    if(input.value.trim() !==  ""){
        const newTask = document.createElement("li");
        newTask.textContent = input.value;
        tasklist.appendChild(newTask);
        input.value = ""
        deleteTask(newTask)
    }
    else{
        alert("Please enter a task before adding it to the list!!!");
    }
}

function deleteTask(newTask){
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    newTask.appendChild(deleteBtn);
    deleteBtn.onclick = function(){
        newTask.remove()
    }
}