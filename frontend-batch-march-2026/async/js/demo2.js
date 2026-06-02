console.log("1- start"); // sync --> run first

setTimeout(
    //callback function
    () => {
        console.log("3 - timeout callback");  //async ---> runs last
    }, 5000);

Promise
    .resolve("resolved")
    .then(val => {
        console.log("2- Microtask ", val); // microtask ---> before timeout
    })
    .catch();

console.log("1.5 - end of sync code");

/*
    output order
       1- start
       1.5 - end of sync code
       2- Microtask
       3 - timeout callback

*/

//asycn database call
function getStudentDetails(id, callback) {
    setTimeout(() => {
        const student = { id, name: "Priya", courseId: 10 };
        callback(null, student);
    }, 500);
}