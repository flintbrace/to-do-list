window.addEventListener("load", () => {
    todosV2 = JSON.parse(localStorage.getItem('todosV2')) || [];

    const addTaskInput = document.querySelector(".add-task__input");
    const addTaskButton = document.querySelector(".add-task__button");
    //
    nowDisplay()
    console.log(todosV2)

    addTaskButton.addEventListener('click', () => {

        if (!addTaskInput.value) {
            alert("You need to add a task")
        } else {
            todo = {
                task: addTaskInput.value
            }

            todosV2.push(todo)

            localStorage.setItem('todosV2', JSON.stringify(todosV2));

            location.reload()
        }


    })


    function nowDisplay() {

        const sample = document.getElementById("sample");
        const h2 = document.querySelector(".h2");
        let numb = todosV2.length

        if (numb >= 1) {
            sample.remove()
        } else {
            setInterval(() => { sample.remove() }, 3000)
        }

        h2.textContent = `Tasks = ${numb}`

        todosV2.forEach(tod => {

            const tasks = document.querySelector(".tasks");
            const newSection = document.createElement("section");
            newSection.classList.add("tasks-task");

            // INPUT 
            const inputN = document.createElement("input");
            inputN.classList.add("tasks__input");
            inputN.setAttribute("type", "text")
            inputN.setAttribute("readonly", "")
            inputN.setAttribute("value", `${tod.task}`)

            // EDIT-BTN 
            const editN = document.createElement("button");
            editN.classList.add("tasks__edit-button");
            editN.textContent = "EDIT";

            // DELETE-BTN 
            const deleteN = document.createElement("button");
            deleteN.classList.add("tasks__delete-button");
            deleteN.textContent = "DELETE";

            newSection.append(inputN, editN, deleteN);


            if (tod.task === "") {
                return;
            } else if (tod.task.length) {
                tasks.append(newSection)
                addTaskInput.value = ""
            }


            editN.addEventListener("click", () => {
                if (editN.textContent === "EDIT") {
                    inputN.removeAttribute("readonly")
                    inputN.setAttribute("outofocus", "on")
                    editN.textContent = "SAVE"
                } else if (editN.textContent === "SAVE") {
                    inputN.setAttribute("readonly", "")
                    editN.textContent = "EDIT"
                    tod.task = editN.previousElementSibling.value;
                    localStorage.setItem('todosV2', JSON.stringify(todosV2));
                }
            })

            deleteN.addEventListener("click", () => {
                todosV2 = todosV2.filter(t => t != tod);
                localStorage.setItem('todosV2', JSON.stringify(todosV2));
                location.reload()
            })



        })
    }






})



















































/* \\\\\\\\\\\\\ */
/* const addTaskInput = document.querySelector(".add-task__input");
const addTaskButton = document.querySelector(".add-task__button");
 
 
const h2 = document.querySelector(".h2");
const sample = document.getElementById("sample");
 
const tasks = document.querySelector(".tasks");
 
addTaskButton.addEventListener("click", () => {
    const addTask = addTaskInput.value;
 
    const newSection = document.createElement("section");
    newSection.classList.add("tasks-task");
 
    // INPUT 
    const inputN = document.createElement("input");
    inputN.classList.add("tasks__input");
    inputN.setAttribute("type", "text")
    inputN.setAttribute("readonly", "")
    inputN.setAttribute("value", `${addTask}`)
 
    // EDIT-BTN 
    const editN = document.createElement("button");
    editN.classList.add("tasks__edit-button");
    editN.textContent = "EDIT";
 
    // DELETE-BTN 
    const deleteN = document.createElement("button");
    deleteN.classList.add("tasks__delete-button");
    deleteN.textContent = "DELETE";
 
    newSection.append(inputN, editN, deleteN)
 
 
 
    if (addTask === "") {
        alert("Add a Task List")
    } else if (addTask.length) {
        sample.remove()
        tasks.append(newSection)
        addTaskInput.value = ""
    }
 
 
 
    editN.addEventListener("click", () => {
        editN.previousElementSibling;
        if (editN.textContent === "EDIT") {
            inputN.removeAttribute("readonly")
            inputN.setAttribute("outofocus", "on")
            editN.textContent = "SAVE"
        } else if (editN.textContent === "SAVE") {
            inputN.setAttribute("readonly", "")
            editN.textContent = "EDIT"
        }
    })
 
    deleteN.addEventListener("click", () => {
        deleteN.parentElement.remove()
    })
 
    let numb = tasks.children.length;
    h2.textContent = `Tasks = ${numb}`
})*/



/*  */


/*  */


/*
const newTaskInput = document.querySelectorAll(".tasks__input");
const TaskEditBtn = document.querySelectorAll(".tasks__edit-button");
const TaskDeleteBtn = document.querySelectorAll(".tasks__delete-button");

TaskEditBtn.forEach(eb => eb.addEventListener("click", () => {
    const newInput = eb.previousElementSibling;
    if (eb.textContent === "EDIT") {
        newInput.removeAttribute("readonly")
        eb.textContent = "SAVE"
    } else if (eb.textContent === "SAVE") {
        newInput.setAttribute("readonly", "")
        eb.textContent = "EDIT"
    }

}))

TaskDeleteBtn.forEach(db => db.addEventListener("click", () => {
    db.parentElement.remove()
})) */
