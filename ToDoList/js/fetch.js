/** call the relevant elements */
const toDoAnchor = document.getElementById("newListOfToDos");


/** fetch data from https://jsonplaceholder.typicode.com/ */

/** promise function */
/*function getToDos(){
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json()) //transform json in regular object
        .then((data) => console.log("promise",data)) // using the reg. object to provide it on console.log
        .catch((err)=> console.log("something is wrong", err))
}

getToDos();
*/


/** async function => it synchronises data requests */

async function getToDosAsync(){

    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    //console.log("async",data)
    //console.log("check data: ", typeof data) // checks data type only => in JS everything is an object
    //console.log("check array ", Array.isArray(data)) // returns boolean to check if data is array

    data.map((toDo)=>{
        //console.log(toDo);
        /** create elements */
        createElement(toDo);

    })  

}

/** Single responsible function from the S-O-L-I-D principles */
function createElement(data){
    const div = document.createElement("div");
    div.classList.add("toDoItem");

    /** checks if the status is true */
    if(data.completed === true){
        div.classList.add("completed")
    }
    
    div.innerText = data.title;
    toDoAnchor.append(div)


}


getToDosAsync()
