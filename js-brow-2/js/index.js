//Declaración de elementos DOM
const inputTask = document.querySelector("#input");
const form = document.querySelector("#form");
const AddTaskBtn = document.querySelector("#addTask");
const listTask = document.querySelector("#ul");
const deleteTaskBtn = document.querySelector("#deleteTask");

let taskId = 1;
let selectedTasks = []; // Alamacena tareas selecionadas
// Crear, tachar (seleccionar), eliminar
// 1.Crear un escuchador de un evento click que ejecutará la función handleSubmit
// sobre el elemento HTML del DOM
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const text = inputTask.value;
  if (text !== "") {
    const li = document.createElement("li");
    li.dataset.taskId = taskId;
    const label = document.createElement("label");
    label.textContent = text;
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.textContent = "";
    inputCheckbox.id = "check-${taskId}";
    li.appendChild(inputCheckbox);
    li.appendChild(label);
    ul.appendChild(li);

    inputTask.value = "";
    taskId++;
  }
}

listTask.addEventListener("change", function (event) {
  const checkbox = event.target;
  if (checkbox.classList.contains("checkbox")) {
    const taskId = checkbox.parentNode.dataset.taskId;
    const isCompleted = checkbox.checked;

    const taskElement = checkbox.parentNode;
    if (isCompleted) {
      taskElement.classList.add("is-completed");
    } else {
      taskElement.classList.remove("is-completed");
    }
  }
});
listTask.addEventListener("click", function (event) {
  const checkbox = event.target;
  if (checkbox.type === "checkbox") {
    const taskId = checkbox.parentNode.dataset.taskId;
    if (checkbox.checked) {
      selectedTasks.push(taskId);
    } else {
      const index = selectedTasks.indexOf(taskId);
      if (index > -1) {
        selectedTasks.splice(index, 1);
      }
    }
  }
});
deleteTaskBtn.addEventListener("click", function () {
  const completedTasks = document.querySelectorAll(
    "#ul .is-completed input[type='checkbox']"
  );
  if (completedTasks.length > 0) {
    for (let i = 0; i < completedTasks.length; i++) {
      const checkbox = completedTasks[i];

      checkbox.parentNode.remove();
    }
  }
  if (selectedTasks.length > 0) {
    for (let i = 0; i < selectedTasks.length; i++) {
      const taskId = selectedTasks[i];
      const taskElement = document.querySelector(
        `#ul li[data-task-id='${taskId}']`
      );
      taskElement.remove();
    }
  }
  selectedTasks = [];
});
//if (event.target.classList.contains("check")) {
//const taskLi = event.target.parentElement;
//const completed = event.target.checked;
//taskLi.classList.toggle("completed", completed);

/*listTask.addEventListener("change", function (event) {
  var checkbox = event.target;
  if (checkbox.classList.contains("task-checkbox")) {
    var taskId = checkbox.dataset.taskId;
    var isCompleted = checkbox.checked;*/
