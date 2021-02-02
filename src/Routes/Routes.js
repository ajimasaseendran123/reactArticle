import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Basic/Header';
import Home from '../components/Home/Home';
import ArticleDetails from '../components/ArticleDetails/ArticleDetails';
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/details" exact component={ArticleDetails} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;