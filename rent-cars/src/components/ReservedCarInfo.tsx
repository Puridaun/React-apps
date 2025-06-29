import { useNavigate } from "react-router-dom";
import React from "react";
import { benefits } from "../pages/ReserveCarPage";
import { BenefitAndFeaturesPrice } from "../pages/ReserveCarPage";
import { RentInputData } from "./HeroHeader";
import { Car } from "./ShowCarsSection";

interface ReservedCarInfoProps {
  getBenefitAndFeaturesPrice: BenefitAndFeaturesPrice;
  rentInputData: RentInputData;
  car: Car;
  rentalDays: number;
}

// -------------------Start COMOPONENT --------------------------------------------------------------------------

const ReservedCarInfo: React.FC<ReservedCarInfoProps> = ({
  getBenefitAndFeaturesPrice,
  rentInputData,
  car,
  rentalDays,
}) => {
  const navigate = useNavigate();
  const toCompleteReservationPage = () => {
    navigate(`/complete-reservation`, {
      state: { car, rentInputData, getBenefitAndFeaturesPrice, rentalDays },
    });
  };

  const {
    clickedBenefit,
    selectedFeatures,
    clickedBenefitPrice,
    selectedFeaturesPrice,
  } = getBenefitAndFeaturesPrice;

  return (
    <div className="reserved-car-last-info">
      <img src={car.image} alt="reserved-car-image" />
      <div className="w-full">
        <div className="reserved-car-info">
          <h2>{car.brand}</h2>
          <p>Rent Date: {rentInputData.rentDate}</p>
          <p>Return Date: {rentInputData.returnDate}</p>
          <p>Location: {rentInputData.location}</p>
        </div>
        <div className="reserved-car-info">
          {clickedBenefit ? (
            <div className="benefits-list">
              <span>{benefits[clickedBenefit].name}</span>
              <span>{benefits[clickedBenefit].price}$</span>
            </div>
          ) : null}
          {selectedFeatures.map((feature: number, index: number) => (
            <div key={index} className="features-list">
              <span>{car.features[feature]}</span>
              <span>{car.feature_price}$</span>
            </div>
          ))}
        </div>
        <div className="reserved-car-total-cost">
          <span>
            {car.price * rentalDays +
              clickedBenefitPrice +
              selectedFeaturesPrice}
            $ / {rentalDays} days
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            toCompleteReservationPage();
          }}
        >
          Next step
        </button>
      </div>
    </div>
  );
};

export default ReservedCarInfo;
