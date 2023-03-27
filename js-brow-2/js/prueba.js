/*function handleChekTask(event) {
  const tarea = event.target;
}
// Botón para borrar
deleteTaskBtn.addEventListener("click", handleDeleteTask);
function handleDeleteTask() {
  listTask.innerHTML = "";
  /* Crear boton en cada tarea
  const trashTask = document.createElement("button");
  trashTask = innerHTML = "";
  trashTask.classList.add("checkTask");
  listTask.appendChild(checkTask);*/
//const item = e.target;
/* if (listTask.target - id.check.contains("deleteTaske")) {
    listTask.target.parentElement.remove();
  }
}

deleteTaskBtn.addEventListener("click", handleDeleteSelected);

function handleDeleteSelected() {
  const selectedItems = ul.querySelectorAll("li input[type=checkbox]:checked");
  selectedItems.forEach((item) => {
    item.parentNode.remove();
  });
}*/

/*function handleDelete(event) {
  // Obtener el botón que desencadenó el evento
  const button = event.target;

  // Obtener el identificador único de la tarea que se va a eliminar (puedes almacenarlo en un atributo personalizado en el botón o en otro elemento relacionado con la tarea)
  const taskId = button.getAttribute("data-task-id");

  // Buscar la tarea correspondiente en la lista de tareas (puedes almacenar la lista en una variable global o en un estado de componente si estás trabajando con React, por ejemplo)
  const taskIndex = listaTareas.findIndex((tarea) => tarea.id === taskId);

  // Eliminar la tarea de la lista de tareas
  if (taskIndex !== -1) {
    listaTareas.splice(taskIndex, 1);
  }

  // Actualizar la interfaz de usuario para reflejar los cambios en la lista de tareas
  const taskElement = button.closest(".task");
  taskElement.remove();
}*/
