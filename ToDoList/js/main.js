
/** call the relevant elements to be able to work in JS */
const inputField = document.getElementById("inputField");
const addButton = document.getElementById("addButton");


/** create functions for input and button */
/**INPUT FIELD function */
const handleNewToDo = (event)=>{
    console.log(event.target.value);
}

/** BUTTON function */
const addNewTodDo =()=>{
    console.log("Button clicked")
}   



/** add EVENTS to elements */
inputField.addEventListener("change", handleNewToDo);
addButton.addEventListener("click", addNewTodDo)