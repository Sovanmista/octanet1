document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    let taskNumber = 1;

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span class="task-number">${taskNumber}.</span>
                ${taskText}
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";
            taskNumber++; 
        }
    });

    taskList.addEventListener("click", function (e) {
        if (e.target && e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
        }
    });
});
