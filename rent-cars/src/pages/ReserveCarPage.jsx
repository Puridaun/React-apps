import { useLocation } from "react-router-dom";
import { useState } from "react";
import ReservedCarInfo from "../components/ReservedCarInfo";

const benefits = [
    {
        name: 'Protectie de baza (CDW)',
        price: 0
    },
    {
        name: 'Protectie medie (SCDW)',
        price: 50
    },
    {
        name: 'Protectie totala (SCDW+)',
        price: 90
    }];

const ReserveCarPage = () => {

    const car = useLocation().state?.car
    const carAvailableDate = useLocation().state?.carAvailableDate

    const [benefitIndex, setBenefitIndex] = useState();
    const [featureIndex, setFeatureIndex] = useState([]);
    const [lastBenefit, setLastBenefit] = useState(null);
    const [allFeatures, setAllFeatures] = useState([]);
    const [featuresCost, setFeaturesCost] = useState(0);
    const [benefitCost, setBenefitCost] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);

    const features = car.features;
    const featurePrice = 5;

    const getRentalDays = () => {

        const start = new Date(carAvailableDate.rentDate);
        const end = new Date(carAvailableDate.returnDate);
        const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        return diff;
    };
    const rentalDays = getRentalDays();

    const isBenefitSelected = (index) => {

        if (benefitIndex === index) {
            setBenefitIndex(null);
            setLastBenefit(null);
            setBenefitCost(0);
            setFinalPrice(featuresCost);
            return;
        }

        setBenefitIndex(index)
        setLastBenefit(benefits[index])
        setBenefitCost(benefits[index].price)
        setFinalPrice(benefits[index].price + featuresCost)
    }

    const isFeatureSelected = (index) => {

        let indexArray = [...featureIndex];
        let total = []
        let price = featuresCost;

        if (indexArray.includes(index)) {

            const filteredArray = indexArray.filter(element => element !== index)
            indexArray = [...filteredArray]
            price -= featurePrice;
        } else {

            indexArray.push(index)
            price += featurePrice;
        }

        setFeatureIndex(indexArray)
        total = indexArray.map(i => features[i])
        setAllFeatures(total)
        setFeaturesCost(price)
        setFinalPrice(benefitCost + price)
    }


    return (
        <div className="std-section reserved-car-section">

            <section className="reserved-car-container">
                <div className="reserved-car-card">
                    <ul>
                        <li>Asistenta rutiera 24/7</li>
                        <li>Anulare gratuita</li>
                        <li>Fara plata in avans</li>
                        <li>Modele noi disponibile pentru inchiriere auto</li>
                    </ul>
                    <img src={`./src/assets/${car.brand}.png`} />
                    <div className="reserved-car-price-tag">
                        <span>{car.price * rentalDays}$</span>
                        <span>{rentalDays} zile</span>
                    </div>
                </div>
                <h2>Protectie in caz de dauna</h2>
                <div key={car.id} className="reserved-car-benefits">
                    {benefits.map((benefit, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => { isBenefitSelected(index) }}
                            className={`car-benefit-card ${benefitIndex === index ? 'selected' : ''}`}>
                            <h3>{benefit.name}</h3>
                            <span>{benefit.price}$</span>
                            <p>Responsabilitatea dvs. in caz de dauna sau furt este egal cu valoarea depozitului</p>
                        </button>
                    ))}
                </div>
                <h2>Echipamente aditionale</h2>
                <div key={car.id} className="reserved-car-features">
                    {features.map((feature, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => { isFeatureSelected(index) }}
                            className={`car-feature-card ${featureIndex.includes(index) ? 'selected' : ''}`}>
                            <h3>{feature}</h3>
                            <span>{featurePrice}$</span>
                        </button>
                    ))}
                </div>
                <ReservedCarInfo car={car} carAvailableDate={carAvailableDate} lastBenefit={lastBenefit} allFeatures={allFeatures} rentalDays={rentalDays} finalPrice={finalPrice} featurePrice={featurePrice} />
            </section>
        </div>
    )
}

export default ReserveCarPage;

