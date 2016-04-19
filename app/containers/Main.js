var React = require('react'),
    styles = require('../styles');

var Main = React.createClass({
    render: function() {
        return (
            <div style={styles.mainContainer}>
                <header style={styles.headerContainer}>
                    <h1 style={styles.siteHeader}>React OpenWeatherAPP</h1>
                    <div style={styles.headerSearchContainer}>
                        <input type='text' class='form-control' id='location' placeholder='City, ST' style={styles.headerWeatherInput} />
                        <button type='submit' className='btn btn-success' style={styles.headerSubmitBtn}>Get Weather</button>
                    </div>
                </header>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;