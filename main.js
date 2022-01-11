const list = document.querySelector("ul");
const addForm = document.querySelector(".add");

// Adding new to do item
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
                      <span>${addForm.add.value}</span>
                      <i class="far fa-trash-alt delete"></i>
                    </li>`;
  // Clear the input after adding
  addForm.add.value = "";
});
