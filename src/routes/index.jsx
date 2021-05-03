import React from "react";
import {
    Router,
    Switch,
    Route
} from "react-router-dom";
import history from '../utils/history'
import Home from '../views/Home'


export default function HomeRouter() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}