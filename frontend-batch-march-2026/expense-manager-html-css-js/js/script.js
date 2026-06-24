const transactionForm = document.getElementById('transactionForm');
const balanceSpan = document.getElementById('balance');
const incomeTotalSpan = document.getElementById('incomeTotal');
const expenseTotalSpan = document.getElementById('expenseTotal');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const transactionTypeSelect = document.getElementById('type');
const categorySelect = document.getElementById('category');
const transactionList = document.getElementById('transactionList');
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function saveTransactions() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function renderTransactions() {
    transactionList.innerHTML = '';
    transactions.forEach((transaction, index) => {
        const li = document.createElement('li');
        li.className = transaction.type === 'income' ? 'income-amt' : 'expense-amt';
        li.innerHTML = `
            <span> ${transaction.description}</span>
            <span> ${transaction.amount.toFixed(2)}</span>
        `;
        transactionList.appendChild(li);
    });
    updateSummary();
}

function updateSummary() {
    const incomeTotal = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);

    const expenseTotal = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);

    const balance = incomeTotal - expenseTotal;

    incomeTotalSpan.textContent = `INR ${incomeTotal.toFixed(2)}`;
    expenseTotalSpan.textContent = `INR ${expenseTotal.toFixed(2)}`;
    balanceSpan.textContent = `INR ${balance.toFixed(2)}`;
}

transactionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = descriptionInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const type = transactionTypeSelect.value;
    const category = categorySelect.value;
    const newTransaction = { description, amount, type, category };
    transactions.push(newTransaction);
    saveTransactions();
    renderTransactions();
    transactionForm.reset();
});

renderTransactions();