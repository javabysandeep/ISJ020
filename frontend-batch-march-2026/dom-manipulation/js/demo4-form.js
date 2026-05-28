const form = document.querySelector("#createProfileForm");
const studentName = document.querySelector("#name");
const studentRollNumber = document.querySelector("#rollNumber");
const studentEmail = document.querySelector("#email");
const studentCourse = document.querySelector("#course");

let studentProfileCard = {};
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(studentName.value.trim().length > 10){
          showError(studentName.value.trim(), "Name length cannot be more than 10");
          console.log("Error due to student name");
    }
    studentProfileCard = {
        student_name: studentName.value,
        student_roll_number: studentRollNumber.value,
        student_email: studentEmail.value,
        student_course: studentCourse.value
    };
    document.querySelector("#name1").value = studentProfileCard.student_name;
    document.querySelector("#rollNumber1").value = studentProfileCard.student_roll_number;
    document.querySelector("#email1").value = studentProfileCard.student_email;
    document.querySelector("#course1").value = studentProfileCard.student_course;

});

function showError(input, message) {
    if (input.length > 10) {
        return message;
    }
    return null;
}

