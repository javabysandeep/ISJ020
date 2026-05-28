const name = document.getElementById("studentName");
const email = document.getElementById("studentEmail");
const course = document.getElementById("course");
const preview = document.getElementById("preview");


// input ==> fires every key + update live preview
name.addEventListener("input", (e) => {
    preview.textContent = `Hello, ${name.value || "..."}! Welcome`;
});


//change ==> fires when course valeu changes
course.addEventListener("change", (e) => {
    console.log(`Course: ${e.target.value}`);
});


// focus + blur 
for (const element of [name, email]) {
    
}