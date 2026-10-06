function addTask() {
    const input = document.getElementById("taskInput");
    const list = document.getElementById("taskList");

    if (input.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    const task = document.createElement("li");
    task.textContent = input.value;

    list.appendChild(task);
    input.value = "";
}
