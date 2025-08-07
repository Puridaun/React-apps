const Headbar = ({ isDarkTheme, isLightTheme }) => {
    return (
        <div>
            <div className='top-background'>
                <img src={isDarkTheme ? '/images/Bitmap-Moon.svg' : '/images/Bitmap-Sun.svg'} />
            </div>
            <div className='change-theme'>
                <h1>TODO</h1>
                <img onClick={isLightTheme} src={isDarkTheme ? '/images/Sun.svg' : '/images/Moon.svg'}></img>
            </div>
        </div>
    );
};


export default Headbar;