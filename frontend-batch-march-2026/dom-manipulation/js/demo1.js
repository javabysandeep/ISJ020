//01. getElementById("id")
 // document object represents  DOM

 let h1Element = document.getElementById("unique-h1");
 console.log(`before change h1 content = ${h1Element.textContent}`);

 h1Element.textContent = "H1 element DOM object content is changed";
console.log(`after change h1 content = ${h1Element.textContent}`);


//02. getElementsByClassName method - HTML Collection element
const listOfParagraphsElement = document.getElementsByClassName("paragraphs-modern");
// let firstParaContent = listOfParagraphsElement.item
console.log(listOfParagraphsElement);

for (const para of listOfParagraphsElement) {
    console.log(para.textContent);

}

//03. getElementsByTagName() - HTMLCollection element
const listOfH2Tags = document.getElementsByTagName("h2");
for (const h2Element of listOfH2Tags) {
    console.log(h2Element.textContent);
}

//04. querySelector("CSS") methdo will return first matched element
const singleMatchedLi = document.querySelector("li");
console.log(singleMatchedLi); // only single element li


//05.querySelectorAll("li") method will return all mathing elements
const listOfLiMatched = document.querySelectorAll("li");
console.log(listOfLiMatched); // all mathching element li