let todoAction = prompt("What would you like to do?")
let todoList = []
while (todoAction !== "quit" && todoAction !== "q") {
    if (todoAction === "new") {
        newTodo = prompt("What would you like to add?")
        todoList.push(newTodo)
        console.log(`${todoList.indexOf(newTodo)}: ${newTodo} was added`)
    } else if (todoAction === "list") {
        console.log("*".repeat(9))
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`)
        }
        console.log("*".repeat(9))
    } else if (todoAction === "delete") {
        index = parseInt(prompt("Type the index of the item you want to delete."))
        while (index === NaN || typeof todoList[index] === "undefined") {
            index = parseInt(prompt("Invalid input. Type a valid index."))
        }
        deletedItem = todoList.splice(index, 1)
        console.log(`${index} : ${deletedItem} was deleted`)
    }
    else {
        alert("Invalid Input")
    }
    todoAction = prompt("What would you like to do?")
}

console.log("App Quitted")