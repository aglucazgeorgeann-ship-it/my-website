const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");
const addBtn = document.getElementById("addContactBtn");
const contactTable = document.getElementById("contactTable").querySelector("tbody");

addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  if (name === "" || phone === "") {
    alert("Please enter both name and phone number.");
    return;
  }

  const row = document.createElement("tr");

  const nameTd = document.createElement("td");
  nameTd.textContent = name;

  const phoneTd = document.createElement("td");
  phoneTd.textContent = phone;

  const actionTd = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    contactTable.removeChild(row);
  });

  actionTd.appendChild(deleteBtn);

  row.appendChild(nameTd);
  row.appendChild(phoneTd);
  row.appendChild(actionTd);

  contactTable.appendChild(row);

  nameInput.value = "";
  phoneInput.value = "";
  nameInput.focus();
});