import { useNavigate } from "react-router-dom";
import { useState } from "react";



const HeroHeader = () => {

    const navigate = useNavigate();


    const date = new Date().toISOString().split('T')[0];



    const [rentDate, setRentDate] = useState(date);
    const [returnDate, setReturnDate] = useState(date);
    const [location, setLocation] = useState('Bucharest');

    const handleRentForm = (e) => {

        e.preventDefault();

        const searchParams = new URLSearchParams({
            rentDate: rentDate,                    // "2025-06-15"
            returnDate: returnDate || '',          // "2025-06-20" or empty string
            location: location || ''               // "Bucharest" or empty string
        });

        navigate(`/available-cars?${searchParams.toString()}`);
    }



    return (
        <header>
            <div className="std-section">

                <div className="hero-container">
                    <form onSubmit={handleRentForm} className="hero-container-form">
                        <div className="form-inputs">
                            <label>Locatie preluare</label>
                            <input
                                name='location'
                                type="text"
                                placeholder="Acasa la mine"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            ></input>
                        </div>
                        <div className="form-inputs">
                            <label>Data de inchiriere</label>
                            <input
                                name="rent-date"
                                placeholder="Alege data"
                                type="date"
                                min={date}
                                value={rentDate}
                                onChange={(e) => setRentDate(e.target.value)}
                                required
                            ></input>
                        </div>
                        <div className="form-inputs">
                            <label>Data de returnare</label>
                            <input
                                name="return-date"
                                type="date"
                                placeholder="Alege data"
                                min={rentDate}
                                value={returnDate}
                                onChange={(e) => setReturnDate(e.target.value)}
                                required
                            ></input>
                        </div>
                        <button type="submit">Profita acum</button>
                    </form>
                </div>
            </div>
        </header>
    );
}

export default HeroHeader;