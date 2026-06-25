const habits = [
    'exercise', 'study', 'read', 'sleep', 'drinkWater'
];
const habitLables = {
    excercise: 'Excercise for 15 minutes',
    study: 'Study for 30 minutes',
    read: 'Read for 20 minutes',
    sleep: 'Sleep for 8 hours',
    drinkWater: 'Drink 5 liters of water'
};

const habitBody = document.getElementById('habitBody');
const addHabitBtn = document.getElementById('addRowBtn');
const TOTAL_DAYS = 30;

let habitData = JSON.parse(localStorage.getItem('habitData')) || {};
// Initialize habitData if empty
if (Object.keys(habitData).length === 0) {
    const today = new Date();
    const formattedDate = formatDate(today);
    habitData = [{ date: formattedDate }];
    saveHabitData();
}

function saveHabitData() {
    localStorage.setItem('habitData', JSON.stringify(habitData));
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function renderTable() {
    habitBody.innerHTML = '';
    habitData.forEach((record, index) => {
        const row = document.createElement('tr');
        const dateCell = document.createElement('td');
        dateCell.textContent = record.date;
        row.appendChild(dateCell);
        
        habits.forEach(habit => {
            const cell = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = record[habit];
            cell.appendChild(checkbox);
            row.appendChild(cell);
        });
        habitBody.appendChild(row);
    });
}

addHabitBtn.addEventListener('click', () => {
    const today = new Date();
    const formattedDate = formatDate(today);
    const newRecord = { date: formattedDate };
    habitData.push(newRecord);
    saveHabitData();
    renderTable();
});

renderTable();

