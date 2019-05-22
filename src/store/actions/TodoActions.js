export const createTodo = (todo) => {
    return (dispatch, getState) => {
        // Some async call can be call here
        dispatch({
            type: 'CREATE_TODO',
            payload: {
                todo
            }
        })
    }
};

export const completeTodo = (todoIndex) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'COMPLETE_TODO',
            payload: {
                todoIndex
            }
        })
    }
}

export const removeTodo = (todoIndex) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'REMOVE_TODO',
            payload: {
                todoIndex
            }
        })
    }
}