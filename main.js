const list = document.querySelector("ul");
const addTodo = document.querySelector(".add");

// Adding new to do item
addTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  if (addTodo.add.value) {
    list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
                        <span>${addTodo.add.value}</span>
                        <i class="far fa-trash-alt delete"></i>
                      </li>`;
  } else {
    alert("Please add to do item first");
  }
  // Clear the input after adding
  addTodo.reset();
});

// Delete to do item and mark as completed with event delegation
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure!")) {
      e.target.parentElement.remove();
    }
  }

  e.target.classList.toggle("completed");
});
