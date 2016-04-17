var React = require('react'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}></Route>
    </Router>
);

module.exports = routes;