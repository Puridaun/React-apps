import { useLocation } from "react-router-dom";

const CompleteReservationPage = () => {

    const formInputs = [
        {
            data: 'Name *',
            type: 'text'
        },
        {
            data: 'Email *',
            type: 'email'
        },
        {
            data: 'Nr. telefon *',
            type: 'number'
        },
        {
            data: 'Varsta *',
            type: 'number'
        },
        {
            data: 'Nr. permis *',
            type: 'number'
        },
    ]

    const location = useLocation();
    const carInformation = location.state?.carInformation;

    console.log(carInformation)
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "d07041ae-f0f3-4840-a1f7-f5965f097ced");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert("Your message was sent succesfully")
            console.log("Success", res);
        }
    };

    return (
        <section className='std-section'>
            <form onSubmit={onSubmit} className="complete-reservation-form">
                {formInputs.map((formInput, index) => (
                    <div key={index} className="form-inputs">
                        <label>{formInput.data}</label>
                        <input
                            name={formInput.data}
                            type={formInput.type}
                        ></input>
                    </div>
                ))}
                <textarea placeholder="Nice"></textarea>
                <div className="reserved-car-last-info">
                    <img src={`./src/assets/${carInformation.car.brand}.png`} />
                    <div>
                        <div className="reserved-car-info">
                            <h2>{carInformation.car.brand}</h2>
                            <p>Rent Date: {carInformation.carAvailableDate.rentDate}</p>
                            <p>Return Date: {carInformation.carAvailableDate.returnDate}</p>
                            <p>Location: {carInformation.carAvailableDate.location}</p>
                        </div>
                        <div className="reserved-car-info">

                            {carInformation.lastBenefit ? (
                                <div className="benefits-list">
                                    <span>{carInformation.lastBenefit.name}</span>
                                    <span>{carInformation.lastBenefit.price}$</span>
                                </div>) : null}
                            {carInformation.allFeatures.map((feature, idx) => (
                                <div key={idx} className="features-list">
                                    <span>{feature}</span>
                                    <span>{carInformation.featurePrice}$</span>
                                </div>
                            ))}
                        </div>
                        <div className="reserved-car-total-cost">

                            <span>{carInformation.car.price * carInformation.rentalDays + carInformation.finalPrice}$</span>
                        </div>
                    </div>
                </div>
                <button>Rezerva</button>
            </form>
        </section>
    )
}

export default CompleteReservationPage;