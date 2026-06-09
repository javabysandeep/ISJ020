//creating a Promise
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


//call the functions
getStudent(1)
    .then(student => {
        console.log(`student details retrived : ${student.id}, ${student.name}`);
        return getCourse(student.courseId);
    })
    .then(course => {
        console.log(`course details  = ${course.id}, ${course.name}`);
    })
    .catch(err => {
        console.log(`Error:: ${err.message}`);
    })
    .finally(() => {
        console.log(`Done -- hide loading spinner`);
    });


const[student, course] =  Promise.all([getStudent(1), getCourse(10)]);