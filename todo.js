let todoAction = prompt("What would you like to do?")
let todoList = []
while (todoAction !== 'quit' && todoAction !== 'q') {
    if (todoAction === "new") {
        todoAction = prompt("What would you like to add?")
        todoList.push(todoAction)
        console.log(`${todoList.indexOf(todoAction)}: ${todoAction} was added`)
    } else if (todoAction === "list") {
        console.log("*".repeat(9))
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`)
        }
        console.log("*".repeat(9))
    } else if (todoAction === "delete") {
        todoAction = parseInt(prompt("Type the index of the item you want to delete."))
        deletedItem = todoList.splice(todoAction, 1)
        console.log(`${deletedItem} was deleted`)
    }
    todoAction = prompt("What would you like to do?")
}

console.log("App Quitted")