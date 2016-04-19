var React = require('react'),
    styles = require('../styles');

function Home(props) {
    return (
        <main style={styles.container}>
            <h1 style={styles.searchTitle}>Enter Your City and State</h1>
            <input type='text' class='form-control' id='location' placeholder='City, ST' style={styles.weatherInput} />
            <button type='submit' className='btn btn-success' style={styles.submitBtn}>Get Weather</button>
        </main>
    );
}

module.exports = Home;