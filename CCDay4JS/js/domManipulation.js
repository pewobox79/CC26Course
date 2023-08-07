/** DOM Manipulation */

const body = document.body;
//console.log(body)

const myContent = document.getElementById("myContent");

/** manipulate the innerText // innerHTML of the selected element myContent */
myContent.innerText = "This is from javascript";
myContent.innerHTML = `<h1>this is my h1 from javascript</h1>`

/** Add an element to the frontend */
const newElement = document.createElement("div");
newElement.className = "redBackground";
newElement.innerText = "this is my new element";
console.log(newElement)


// add the newElement to the "anchor element " myContent
myContent.append(newElement)
