

const ShowCarsSection = () => {

    // List of makes you want to load
    const cars = ['BMW i4', 'BMW ix2', 'Kia', 'Ford', 'Dacia Logan'];
    return (
        <section className="std-section">
            {cars.map((car, index) => (
                <div key={index} className="recomended-cars-container">
                    <img src={`./src/assets/${car}.png`} />
                    <div className="recomended-car-info">
                        <h2>{car}</h2>
                        <span>Beneficii</span>
                        <ul>
                            <li>TVA inclus si deductibil</li>
                            <li>Asistenta rutiera 24/7</li>
                            <li>Anulare gratuita</li>
                            <li>Fara plata in avans</li>
                            <li>Kilometrii nelimitati</li>
                            <li>Modele noi</li>
                        </ul>
                        <button >Rezerva acum!</button>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default ShowCarsSection;