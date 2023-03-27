const form = document.querySelector("#form");
const label = document.querySelector("#label");
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const section = document.querySelector("section");
const deleteBtn = document.querySelector("#deleteBtn");

// Manejar el evento de enviar el formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const addText = input.value;
  localStorage.setItem("name", addText);
  console.log(addText);
  showName();
});

// Función para mostrar el nombre guardado en localStorage

function showName() {
  const addName = document.createElement("h1");
  section.appendChild(addName);
  const saveName = localStorage.getItem("name");
  addName.textContent = saveName;
  if (!saveName) {
    alert("No hay datos");
  }
}

// Función para borrar el nombre guardado en localStorage
deleteBtn.addEventListener("click", deleteName);
function deleteName() {
  localStorage.removeItem("name");
}

// Mostrar el nombre guardado al cargar la página
window.onload = iniciar;
function iniciar() {
  alert("Hola");
  showName();
}
