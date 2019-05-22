import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import TodoRouter from './modules/todo/TodoRouter';

class AppRouter extends React.Component {
    render() {
        return <Router>
            <nav className="navbar is-primary" role="navigation">
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/todo/">Todo List</Link>
                    </div>
                </div>
            </nav>
            <Route path="/todo" component={TodoRouter} />
        </Router>
    }
}

export default AppRouter;