const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');
const tab4 = document.getElementById('tab4');
const tab5 = document.getElementById('tab5');
const btn = document.getElementById('btn');
let notificationCount = 10;

btn.addEventListener('click', () => {
    notificationCount++;
    updateNotificationCount();
});

function updateNotificationCount() {
    tab1.textContent = notificationCount;
    tab2.textContent = notificationCount;
    tab3.textContent = notificationCount;
    tab4.textContent = notificationCount;
    tab5.textContent = notificationCount;
}

const student = { name: "vaibhav", age: 20, email: "vaibhav@example.com" };
//component
function StudentCard({ name, age, email }) {
    return <div>
        <h3>Name : {name}</h3>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
    </div>;
}
