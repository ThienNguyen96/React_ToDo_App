import React from 'react'
import { connect } from 'react-redux';
import { createTodo } from '../../../store/actions/TodoActions';

class TodoForm extends React.Component {
    state = {
        todoName: '',
        todoLocation: '',
    };
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    };
    resetForm = () => {
        this.setState({
            todoName: '',
            todoLocation: '',
        })
        document.getElementById('addTodoForm').reset();
    }  
    handleSubmit = (event) => {
        event.preventDefault();
        const todoObj = {
            name: this.state.todoName,
            location: this.state.todoLocation,
            isCompleted: false,
        }
        this.props.createTodo(todoObj);
        this.resetForm();
    };
    render() {
        return <div>
            <h3 className="is-size-3">New todo</h3>
            <form id="addTodoForm" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label htmlFor="" className="label">Task</label>
                    <input type="text" className="input" id="todoName" onChange={this.handleChange}/>
                </div>
                <div className="field">
                    <label htmlFor="" className="label">Location</label>
                    <input type="text" className="input" id="todoLocation" onChange={this.handleChange}/>
                </div>
                <div className="field">
                    <button className="button is-primary" type="submit">Add</button>
                </div>
            </form>
        </div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTodo: (todo) => dispatch(createTodo(todo))
    }
}

export default connect(null, mapDispatchToProps)(TodoForm);