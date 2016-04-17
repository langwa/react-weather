var React = require('react'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    browserHistory = ReactRouter.browserHistory;

var Main = require('../components/Main');

var routes = (
    <Router history={browserHistory}>
        <Route path='/' component={Main}></Route>
    </Router>
);

module.exports = routes;