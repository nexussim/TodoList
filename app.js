
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
    }
    
    function deleteTodo(todoList, position) {
        todoList.splice(position, 1);
    }
    
    function deleteAll(todoList) {
        todoList.splice(0, todoList.length);
    }
    
    function changeTodo(todoList, todoText, position) {
        todoList[position].todo = todoText;
    }
    
    function toggleCompleted(todoList, position) {
        todoList[position].completed = !todoList[position].completed;
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
    }
        
    function displayTodos(todoList) {
        console.log("My Todos: ");
        for (var i = 0; i < todoList.length; i++) {
            console.log(todoList[i]);
            
        }
    }

