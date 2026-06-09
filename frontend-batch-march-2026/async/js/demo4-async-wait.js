
async function loadStudentDashboard(studentId) {
    try {
        //error prone code
        //show spinner
        showSpinner(true);

        //sequential 
        const student = await getStudent(studentId);
        console.log(`student loaded : ${student.name}`);

        const course = await getCourse(student.courseId);
        console.log(`course loaded : ${course.name}`);

        //render
        //renderDashboard({ student, course });

    } catch (err) {

        console.error(`Dashboard failed ${err}`);

    } finally {
        showSpinner(false);
    }

}
loadStudentDashboard(1);

function getStudent(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id <= 0) {
                reject(new Error("Invalid student id")); // failure
            } else {
                resolve({ id: 101, name: "Priya", courseId: 101 }); ///success
            }
        }, 50000);
    });
}

function getCourse(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: "fullstack java" });
        }, 5000);
    });
}
function showSpinner(flag) {
    if (flag) {
        console.log(`spinner running`);
    }
    else {
        console.log(`spinner stopped`);
    }
}


async function fetchUsers() {
    try {
        //fetch returns promise
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
        }
        const users = await response.json(); // promise
        console.log(users);
        return users;
    } catch (error) {
        console.log(`fetched failed ${error.message}`);
    }

}
for (const user of fetchUsers()) {
    console.log(user.name + "\t" + user.email);
}