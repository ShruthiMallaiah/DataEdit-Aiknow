import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import EditPost from './components/EditPost';
import Home from './components/Home';

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/edit/:id" component={EditPost} />
            <Redirect to="/" />
        </Switch>
    );
};

export default AppRouter;