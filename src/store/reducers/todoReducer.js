const initState = {
    todos: [
        { 
            name: 'Meeting this evening for the mass',
            location: 'At the church',
            isCompleted: false
        },
        { 
            name: 'Watch "Senko-san"',
            location: 'At home',
            isCompleted: false
        },
        { 
            name: 'Watch "The rising of the shield hero"',
            location: 'At company',
            isCompleted: true
        },
    ]
}

const todoReducer = (state = initState, action) => {
    
    switch (action.type) {
        case 'CREATE_TODO':
            return {
                todos: [...state.todos, action.payload.todo]
            }
        case 'COMPLETE_TODO':
            const newTodos = [...state.todos]
            newTodos[action.payload.todoIndex].isCompleted = true;
            return {
                todos: newTodos
            };
        case 'REMOVE_TODO':
            const todosForRemove = [...state.todos];
            todosForRemove.splice(action.payload.todoIndex, 1);
            return {
                todos: todosForRemove
            };
        default:
            return state;
    }
}

export default todoReducer