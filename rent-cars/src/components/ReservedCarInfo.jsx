import { useNavigate } from "react-router-dom";

const ReservedCarInfo = ({ car, carAvailableDate, lastBenefit, allFeatures, featurePrice, finalPrice, rentalDays }) => {

    const carInformation = {
        car: car,
        carAvailableDate: carAvailableDate,
        lastBenefit: lastBenefit,
        allFeatures: allFeatures,
        featurePrice: featurePrice,
        finalPrice: finalPrice,
        rentalDays: rentalDays,
    }
    console.log(carInformation)

    const navigate = useNavigate();

    const toCompleteReservationPage = () => {
        navigate(`/complete-reservation`, { state: { carInformation } })
    }

    return (
        <div className="reserved-car-last-info">

            <img src={`./src/assets/${car.brand}.png`} />
            <div>
                <div className="reserved-car-info">
                    <h2>{car.brand}</h2>
                    <p>Rent Date: {carAvailableDate.rentDate}</p>
                    <p>Return Date: {carAvailableDate.returnDate}</p>
                    <p>Location: {carAvailableDate.location}</p>
                </div>
                <div className="reserved-car-info">

                    {lastBenefit ? (
                        <div className="benefits-list">
                            <span>{lastBenefit.name}</span>
                            <span>{lastBenefit.price}$</span>
                        </div>) : null}
                    {allFeatures.map((feature, idx) => (
                        <div key={idx} className="features-list">
                            <span>{feature}</span>
                            <span>{featurePrice}$</span>
                        </div>
                    ))}
                </div>
                <div className="reserved-car-total-cost">

                    <span>{car.price * rentalDays + finalPrice}$</span>
                </div>
                <button onClick={() => { toCompleteReservationPage() }}>Next step</button>
            </div>
        </div>
    )
}

export default ReservedCarInfo;