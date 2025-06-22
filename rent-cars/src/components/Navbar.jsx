import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="navbar-container">
            <div className="navbar-content">
                <img src="./src/assets/logo.jpg" alt="Logo" />
                <div className="navbar-navigation">
                    <button className="fs16" onClick={() => navigate('/')}>Acasa</button>
                    <button className="fs16" onClick={() => navigate('/')}>Recomandari</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar