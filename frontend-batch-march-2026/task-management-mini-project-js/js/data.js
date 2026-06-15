/*
[
            {
            id: number,
            title : string,
            assignee : string,
            priority : "low" | "High" " "medium",
            status : string,
            startDate : string,
            dueDate : string,
            created : string
        },
         {
            id: number,
            title : string,
            assignee : string,
            priority : "low" | "High" " "medium",
            status : string,
            startDate : string,
            dueDate : string,
            created : string
        }
]


*/
const tasks_key = "itshaala_tasks_key";

//load / save the data in localstorage
function loadTasks() {
    try {
        return JSON.parse(localStorage.getItem(tasks_key)) || [];
    } catch (error) {
        return [];
    }
}

function saveTasks(tasks) {
    localStorage.setItem(tasks_key, JSON.stringify(tasks));
}


let tasks = loadTasks;

let lastDeleted = null;

let activeFilters = {
    status: "all",
    assign: "all",
    search: ""
};

function addTask(data) {
    const task = { ...data, id: Date.now(), status: "todo", created: new Date.toString() };
    tasks.push(task);
    saveTasks(tasks);
    return task;
}

function updateTask(data) {

}

function deleteTask(id) {

}

function getFilteredTasks() {

}