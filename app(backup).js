
//Features to add
    //nested todos
    //change todos input box
    //todo input box
    //todo counter
    //toggle all todos


    var todoList1 = [];
    var todoList2 = [];

    function addTodo(todoList, todo) {
        var newTodo = {
            todo: todo,
            completed: false
        }
        todoList.push(newTodo)
        var thisTodoList = todoList;
        displayTodos(thisTodoList);
    }
    
    function deleteTodo(todoList, position) {
        todoList.splice(position, 1);
        displayTodos(todoList);
    }
    
    function deleteAll(todoList) {
        todoList.splice(0, todoList.length);
        console.log("You have no todos!");
    }
    
    function changeTodo(todoList, todoText, position) {
        todoList[position].todo = todoText;
        displayTodos(todoList);
    }
    
    function toggleCompleted(todoList, position) {
        todoList[position].completed = !todoList[position].completed;
        displayTodos(todoList);
    }
    
    function toggleAll(todoList) {
        var isNotCompleted = 0;
    
        /* Check if todo is true or false and increment appropriate variable. */
        
        todoList.forEach(function (todo) {
            if (todo.completed === false) {
                isNotCompleted++;
            }
        })
    
        /* Set all todos to true or false */
    
        todoList.forEach(function (todo) {
            if (isNotCompleted > 0) {
                todo.completed = true;
            } else {
                todo.completed = false;
            }
        }) 
        
        displayTodos(todoList);
    }
        
    function displayTodos(todoList) {
        console.log("My Todos: ");
        for (var i = 0; i < todoList.length; i++) {
            console.log(todoList[i]);
            
        }
    }

