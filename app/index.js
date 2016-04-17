var React = require('react'),
    ReactDOM = require('react-dom');

function HelloWorld(props) {
    return (
        <div>Hello World!</div>
    );
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
);