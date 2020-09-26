
//Features to add
    //nested todos
    //change todos input box
    //todo input box
    //todo counter

    var allTodoLists = [];
    var addTodoCounter = 0;

    function createTodoList() {
        allTodoLists.push([]);
    }

    function addTodo(position, todo) {
        arrayPosition = allTodoLists[position];
        
        var newTodo = {
            todo: todo,
            completed: false,
            id: addTodoCounter,
        }
        addTodoCounter++
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
    
    function toggleAll(todoListPosition) {
        var isNotCompleted = 0;
        var arrayPosition = allTodoLists[todoListPosition];
        /* Check if todo is true or false and increment. */
        
        arrayPosition.forEach(function (todo) {
            if (todo.completed === false) {
                isNotCompleted++;
            }
        })
    
        /* Set all todos to true or false */
    
        arrayPosition.forEach(function (todo) {
            if (isNotCompleted > 0) {
                todo.completed = true;
            } else {
                todo.completed = false;
            }
        }) 
    }
        
    function displayTodos(todoListPosition) {
        var arrayPosition = allTodoLists[todoListPosition];
        console.log("My Todos: ");
        for (var i = 0; i < arrayPosition.length; i++) {
            console.log(arrayPosition[i]);
            
        }
    }




    createTodoList();
    createTodoList();
    addTodo(1, 'first');
    addTodo(1, 'second');
    toggleCompleted(1, 1);
    changeTodo(1, 1, 'test');
    displayTodos(1);
