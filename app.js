
//Features to add
    //nested todos
    //change todos input box
    //todo input box
    //todo counter
    //filter active, completed, all
    //clear completed

    
    var arrayWithResults = [];
    var findTodoResult;
    
    let allTodoLists = [
        {
          todo: "third", completed: true, id: 2,
          nestedTodos: [
            { todo: "fourth", completed: true, id: 3,},
            { todo: "fifth", completed: true, id: 4,
              nestedTodos:[
                 { todo: "nestFromHere", completed: false, id: 7,},
              ]
            },
            { todo: "eighth", completed: true, id: 8,
              nestedTodos:[
                 { todo: "nineth", completed: false, id: 9,},
              ]
            },
            { todo: "sixth", completed: true, id: 5,},
            { todo: "seventh", completed: true, id: 6,},
          ],
        },
      ];

    function createTodoList() {
        allTodoLists.push([]);
    }

    function addTodo(position, todo) {

        
        var newTodo = {
            todo: todo,
            completed: false,
            id: addTodoCounter,
        }
        addTodoCounter++
        allTodoLists[position].push(newTodo)
    }

    
    function findTodo(array, nestedTodos, todoId, newTodo) {
        for (var i = 0; i < array.length; i++) {
            var currentArrayElement = array[i];
            if(currentArrayElement.id === todoId) {
                result = currentArrayElement;
                return result;
            }
            if (nestedTodos in currentArrayElement) {
                for (var j = 0; j < currentArrayElement.nestedTodos.length; j++) {
                    arrayWithResults.push(currentArrayElement.nestedTodos[j]);
                }
            } else if (array[i].length > 0) {
                arrayWithResults.push(array[i]);
            }
        }
        for (var m = 0; m < arrayWithResults.length; m++) {
            if (findTodoResult) {
                break;
            }
            var arrayWithResultsElement = arrayWithResults[m]
            if (nestedTodos in arrayWithResultsElement)
            findTodoResult = findTodo(arrayWithResults, nestedTodos, todoId, newTodo);
        }
        return findTodoResult;
    }

    function deleteTodo(todoId) {
        var foundTodo = findTodo(todoId);
        for (var i = 0; i < allTodoLists.length; i++) {
            var arrayWithTodo = allTodoLists[i].includes(foundTodo);
            if (arrayWithTodo) {
                var todoIndex = allTodoLists[i].indexOf(foundTodo);
                var arrayTodoIsIn = allTodoLists[i];
                arrayTodoIsIn.splice(todoIndex, 1);
                return;
            }
        }
    }
    
    function deleteTodoList(todoList) {
        allTodoLists.splice(todoList, 1);
    }

    function deleteAll() {
        allTodoLists.splice(0);
        console.log('You have no todos!')
    }
    
    function changeTodo(array, nestedTodos, todoId, newTodo) {
        var returnValue = findTodo(array, nestedTodos, todoId, newTodo);
        returnValue.todo = newTodo;
        findTodoResult = undefined;
        arrayWithResults = [];
    }
    
    function toggleCompleted(array, nestedTodos, todoId) {
        var returnValue = findTodo(array, nestedTodos, todoId);
        returnValue.completed = !returnValue.completed;
        findTodoResult = undefined;
        arrayWithResults = [];
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
        
    function displayTodoList(array, nestedTodos, todoId) {
        var arrayPosition = findTodo(array, nestedTodos, todoId);
        console.log("My Todos: ");
        arrayWithResults.forEach(function(todo){
            console.log(todo);
        })
        arrayWithResults = [];
    }

