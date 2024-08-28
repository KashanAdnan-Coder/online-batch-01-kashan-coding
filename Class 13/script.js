// how to create tag in javascript
// using DOM
let nodeToAdd = document.createElement("p")
// document is a html 
// What is createElement ?
let textNode = document.createTextNode("Computer")

let tag = nodeToAdd.appendChild(textNode)

// console.log(tag);


let container = document.getElementById("container")
let before = container.childNodes[0].nextSibling
container.insertBefore(tag, before)
// 2 parameter

// // console.log(container.nextSibling);

// container.removeChild(container.childNodes[0])