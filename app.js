
//Features to add
    //nested todos
    //change todos input box
    //todo input box
    //todo counter
    //filter active, completed, all
    //clear completed

    
    var arrayWithResults = [];
    var addTodoCounter = 0;

    
    let allTodoLists = [
        {
          todo: "third", completed: false, id: 2, parentTodoId: '?',
          nestedTodos: [
            { todo: "fourth", completed: false, id: 3, parentTodoId: 2},
            { todo: "fifth", completed: false, id: 4, parentTodoId: 2,
              nestedTodos:[
                 { todo: "nestFromHere", completed: false, id: 7, parentTodoId: 4},
                 { todo: "nestFromHere", completed: false, id: 10, parentTodoId: 4},
                    
              ]
            },
            { todo: "eighth", completed: false, id: 8, parentTodoId: 2,
              nestedTodos:[
                 { todo: "nineth", completed: false, id: 9, parentTodoId: 8},
              ]
            },
            { todo: "sixth", completed: false, id: 5, parentTodoId: 2},
            { todo: "seventh", completed: false, id: 6, parentTodoId: 2},
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
    
    function flattenTodoList(list) {
            
        var result = [];

        var stack = [list];
        while(stack.length > 0) {
            var a_List = stack.pop();
            for (let todo of a_List) {
                result.push(todo);
                if('nestedTodos' in todo) {
                    stack.push(todo.nestedTodos);
                }
            }
        }
        return result;    
    }

    function findTodoWithId(returnValue, todoId) {
        for (var i = 0; i < returnValue.length; i++) {
            if (returnValue[i].id === todoId) {
                var newReturnValue = returnValue[i];
            }
        }
        return newReturnValue;
    }

    function toggleCompleted(array, todoId) {
        var returnValue = flattenTodoList(array, todoId);
        returnValue = findTodoWithId(returnValue, todoId);
        returnValue.completed = !returnValue.completed;

    }

    function deleteTodo(array, todoId) {
        var returnValue = flattenTodoList(array, todoId);
        var foundTodo = findTodoWithId(returnValue, todoId);
        var foundTodoParent = foundTodo.parentTodoId
        for (var i = 0; i < returnValue.length; i++) {
            if (foundTodoParent === returnValue[i].id) {
                var indexToSplice = returnValue[i].nestedTodos.indexOf(foundTodo);
                returnValue[i].nestedTodos.splice(indexToSplice, 1);
                break;
            }
        }
    }
        
    function deleteTodoList(array, todoListId) {
        var returnValue = flattenTodoList(array, todoListId);
        var foundTodo = findTodoWithId(returnValue, todoListId);
        foundTodo.nestedTodos.splice(0)
    }

    function deleteAll() {
        allTodoLists.splice(0);
        console.log('You have no todos!')
    }
    
    function changeTodo(array, todoId, newTodo) {
        var returnValue = flattenTodoList(array, todoId);
        returnValue = findTodoWithId(returnValue, todoId);
        returnValue.todo = newTodo;
    }

    function toggleListCompleted(array, todoListId) {
        var isNotCompleted = 0;
        var returnValue = flattenTodoList(array);
        var foundTodo = findTodoWithId(returnValue, todoListId);
        for (var i = 0; i < foundTodo.nestedTodos.length; i++) {
            if (foundTodo.nestedTodos[i].completed === false) {
                isNotCompleted++;
            }
        }
        for (var j = 0; j < foundTodo.nestedTodos.length; j++) {
            if (isNotCompleted > 0) {
                foundTodo.nestedTodos[j].completed = true;
            } else {
                foundTodo.nestedTodos[j].completed = false;
            }
        }
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
        
    function displayTodoList() {
        console.log("My Todos:");
        console.log(allTodoLists);
    }











    /* Old displayTodoList

    // function displayTodoList(array, nestedTodos, todoId) {
    //     var arrayPosition = findTodo(array, nestedTodos, todoId);
    //     console.log("My Todos: ");
    //     arrayWithResults.forEach(function(todo){
    //         console.log(todo);
    //     })
    //     arrayWithResults = [];
    // }

    */