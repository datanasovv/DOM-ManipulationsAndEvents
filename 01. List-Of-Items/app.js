function addItem() {
  let inputEl = document.getElementById("newItemText");
  let itemsEl = document.getElementById("items");

  let liEl = document.createElement("li");
  liEl.textContent = inputEl.value;

  itemsEl.appendChild(liEl)
  inputEl.value=""
}
