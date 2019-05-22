import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import TodoList from './pages/TodoList/TodoList'

class TodoRouter extends React.Component {
    render() {
        return(
            <Router>
                <Route path="" component={TodoList}></Route>
            </Router>
        )
    }
}

export default TodoRouter