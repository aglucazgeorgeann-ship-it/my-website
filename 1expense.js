const form = document.getElementById("transaction-form");
const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const list = document.getElementById("transaction-list");
const balanceDisplay = document.getElementById("balance");

let transactions = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const description = descInput.value;
  const amount = parseFloat(amountInput.value);

  if (description && !isNaN(amount)) {
    const transaction = {
      id: Date.now(),
      description,
      amount,
    };
    transactions.push(transaction);
    descInput.value = "";
    amountInput.value = "";
    updateUI();
  }
});

function updateUI() {
  list.innerHTML = "";
  let balance = 0;

  transactions.forEach((tx) => {
    balance += tx.amount;

    const li = document.createElement("li");
    li.classList.add(tx.amount >= 0 ? "income" : "expense");
    li.innerHTML = `
      ${tx.description}: ₱${tx.amount.toFixed(2)}
      <button onclick="deleteTx(${tx.id})">❌</button>
    `;
    list.appendChild(li);
  });

  balanceDisplay.textContent = balance.toFixed(2);
}

function deleteTx(id) {
  transactions = transactions.filter(tx => tx.id !== id);
  updateUI();
}