
//Features to add
    //nested todos
    //change todos input box
    //todo input box
    //todo counter


    var allTodoLists = [];
    // var todoList1 = [];
    // var todoList2 = [];

    function createTodoList() {
        allTodoLists.push([]);
    }

    function addTodo(position, todo) {
        var newTodo = {
            todo: todo,
            completed: false
        }
        allTodoLists[position].push(newTodo)
    }
    
    function deleteTodo(todoListPosition, todoPosition) {
        allTodoLists[todoListPosition].splice(todoPosition, 1);
    }
    
    function deleteAll(todoList) {
        todoList.splice(0, todoList.length);
    }
    
    function changeTodo(todoListPosition, todoPosition, todoText) {
        var arrayPosition = allTodoLists[todoListPosition];
        arrayPosition[todoPosition].todo = todoText;
    }
    
    function toggleCompleted(todoListPosition, todoPosition) {
        var arrayPosition = allTodoLists[todoListPosition];
        arrayPosition[todoPosition].completed = !arrayPosition[todoPosition].completed
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

