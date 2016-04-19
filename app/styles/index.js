var styles = {
    headerContainer: {
        height: 72,
        color: 'white',
        width: '100%',
        padding: '0 10px',
        position: 'fixed',
        zIndex: 2,
        background: 'rgba(252, 90, 44, 0.89)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerSearchContainer: {
        padding: 0,
        display: 'flex',
        fontSize: 30,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    siteHeader: {
        margin: 0
    },
    headerWeatherInput: {
        background: 'rgba(255,255,255,0.25)',
        color: 'white',
        border: 'none',
        fontWeight: 400,
        borderRadius: 5,
        textAlign: 'center'
    },
    headerSubmitBtn: {
        fontSize: 'inherit',
        padding: '0 10px',
        marginLeft: 10
    },
    mainContainer: {
        height: '100%',
        width: '100%',
        margin: 0,
        padding: 0,
    },
    container: {
        backgroundSize: 'cover',
        backgroundImage: "url('app/images/pattern.svg')",
        backgroundPosition: '0 72px',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        paddingTop: 72
    },
    searchTitle: {
        fontSize: 90,
        padding: 0,
        margin: 10,
        color: 'white',
        fontWeight: '200'
    },
    weatherInput: {
        background: 'rgba(255,255,255,0.25)',
        color: 'white',
        border: 'none',
        fontSize: 45,
        fontWeight: 400,
        padding: 4,
        borderRadius: 5,
        textAlign: 'center'
    },
    submitBtn: {
        margin: 20,
        fontSize: 30
    }
};

module.exports = styles;