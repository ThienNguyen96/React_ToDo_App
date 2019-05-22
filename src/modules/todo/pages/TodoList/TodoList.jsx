import React from 'react';
import { connect } from 'react-redux';

// components
import AppTodoForm from '../../components/TodoForm';
import AppListOfTodo from '../../components/ListOfTodo';

class TodoList extends React.Component {
    render() {
        // console.log(this.props)
        const { todos } = this.props;
        return <div className="container">
            <div className="columns">
                <div className="column is-one-third">
                    <AppTodoForm />
                </div>
                <div className="column">
                    <AppListOfTodo todos={todos}/>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo.todos
    }
}

export default connect(mapStateToProps)(TodoList)