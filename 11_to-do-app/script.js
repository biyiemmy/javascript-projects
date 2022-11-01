const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const clear = document.querySelector(".clear");

const addTask = (e) => {
  e.preventDefault();
  const nnewLine = document.createElement("li");
  const deleteButton = document.createElement("button");

  deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';

  if (input.value !== "") {
    // If it is'nt empty
    nnewLine.textContent = input.value;
    nnewLine.appendChild(deleteButton); // add
    todoList.appendChild(nnewLine);
    input.value = "";
  } else {
    alert("Please enter a task");
  }
  // delete function
  deleteButton.addEventListener("click", function () {
    const del = confirm("Are you sure you want to delete this task!!!");

    if (del == true) {
      const parent = this.parentNode;
      parent.remove();
    }
  });
};

btn.addEventListener("click", addTask);
clear.addEventListener("click", () => {
  todoList.innerHTML = "";
});
