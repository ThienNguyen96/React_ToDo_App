import React from 'react';
import { connect } from 'react-redux';

import { completeTodo, removeTodo } from '../../../store/actions/TodoActions';

class ListOfTodo extends React.Component {
    completeTask = (taskIndex, event) => {
        this.props.completeTodo(taskIndex);
    };
    removeTodo = (todoIndex, event) => {
        this.props.removeTodo(todoIndex);
    };
    listTodo = ({ todos }) => {
        return todos && todos.map((todo, index) => {
            return <tr key={index}>
                <td>{todo.name}</td>
                <td>{todo.location}</td>
                <td>
                    {todo.isCompleted ?
                        <span className="has-text-success">Completed</span> :
                        <button className="button is-success" onClick={() => this.completeTask(index)}>Complete task</button>
                    }
                </td>
                <td>
                    <button className="button is-danger" onClick={() => this.removeTodo(index)}>Delete</button>
                </td>
            </tr>
        })
    }
    render() {
        return <div>
            <h3 className="is-size-3">Todo list</h3>
            <table className="table is-fullwidth">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Location</th>
                        <th>Completed?</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.listTodo(this.props)}
                </tbody>
            </table>
        </div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        completeTodo: (todoIndex) => dispatch(completeTodo(todoIndex)),
        removeTodo: (todoIndex) => dispatch(removeTodo(todoIndex)),
    }
}

export default connect(null, mapDispatchToProps)(ListOfTodo);