const Headbar = ({ isDarkTheme, isLightTheme }) => {
    return (
        <div>
            <div className='top-background'>
                <img src={isDarkTheme ? './src/assets/Bitmap-Moon.svg' : './src/assets/Bitmap-Sun.svg'} />
            </div>
            <div className='change-theme'>
                <h1>TODO</h1>
                <img onClick={isLightTheme} src={isDarkTheme ? './src/assets/Sun.svg' : './src/assets/Moon.svg'}></img>
            </div>
        </div>
    );
};


export default Headbar;