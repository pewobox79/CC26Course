const root = document.getElementById("root");
const addButton = document.getElementById("addToDo")
const inputField = document.getElementById("inputField")
const form = document.getElementById("form")
const ul = document.createElement("ul")
root.append(ul)


let newToDo = ""
let listOfToDos=[]

function handleNewTodDo(e){
    newToDo= e.target.value
}

function handleAdd(){
listOfToDos.push(newToDo)
/**clear list before adding new elements
 * 
 */
if(listOfToDos.length > 0){
    ul.innerHTML = ""
}
/* create the list of elements */
listOfToDos.map((item)=>{

    const li = document.createElement("li");
    li.innerText = item

    ul.append(li)
    inputField.value = ""

})

}


inputField.addEventListener("change", handleNewTodDo)
addButton.addEventListener("click", handleAdd)



/** 
 * after that we do fetch and make the same
 */

