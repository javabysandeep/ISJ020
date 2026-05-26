const btn = document.querySelector("#addBtn"); //js object for button

//event = button click
//eventListener ==> it is a function which runs when specific thing or event happens on the element

//01. Basic Event Listener

//method call which need to arguments [eventType, function]

btn.addEventListener("click", buttonClickLogicFunction);

function buttonClickLogicFunction(event) {
    console.log(`Button clicked A`);
    console.log(`Event type ${event.type}`);
    console.log(`Event target ${event.target}`);
}

//02. Arrow function
btn.addEventListener("click", (event) => {
    console.log(`Button clicked B`);
    console.log(`Event type ${event.type}`);
    console.log(`Event target ${event.target}`);
});

// remove eventListener function
btn.removeEventListener("click", buttonClickLogicFunction);

//mouse events - click, double click, mouseenter, mouseleave, mousemove
const boxButton = document.querySelector(".box");
boxButton.addEventListener("click", (e) => console.log("button single click"));
boxButton.addEventListener("dblclick", (e) => console.log("button double click"));
boxButton.addEventListener("mouseenter", (e) => console.log("button hover"));

//block right click
boxButton.addEventListener("contextmenu",(e)=>{
    e.preventDefault(); // block right click
    console.log("custom right click");
});


//keyboard events : keydown, keyup, enter
const input = document.querySelector("#search");

input.addEventListener("keydown",(e)=>{
    console.log(`key : ${e.key}`);
    if(e.key==="Enter"){
        console.log("Search triggered");
    }
    if(e.key==="Escape"){
        input.value = "";
    }
    
});

