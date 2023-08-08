
/** call the relevant elements to be able to work in JS */
const inputField = document.getElementById("inputField");
const addButton = document.getElementById("addButton");
const listAnchor = document.getElementById("listOfToDos");

/** Store Definition */
const listOfToDos = [] //stores all todos
let newToDo = "" // stores the new input value


/** create functions for input and button */
/**INPUT FIELD function */
const handleNewToDo = (event)=>{
    newToDo = event.target.value;

    console.log(`this is my todo value ${newToDo[4]}`)
}

/** BUTTON function */
const addNewToDo =()=>{
    /**adding new item to array */
    listAnchor.innerHTML = "" //cleans the innerhtml content to zero <li>
    
    /** new item adding and render all <li> to frontend */
    listOfToDos.push(newToDo);


    /**read all items from the array */
    listOfToDos.map(toDo=>{

        const li = document.createElement("li");
        li.innerText = toDo;

        listAnchor.append(li)
        
        inputField.value = "";
    })



}   

console.log("list of todos", listOfToDos)

/** add EVENTS to elements */
inputField.addEventListener("change", handleNewToDo);
addButton.addEventListener("click", addNewToDo)


// () => used function OR method 
// {} => used for wrap defined actions OR collects properties  
// [] => used ARRAY and calling index values


