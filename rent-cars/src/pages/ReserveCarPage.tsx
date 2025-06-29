import { useLocation } from "react-router-dom";
import { useState } from "react";
import ReservedCarInfo from "../components/ReservedCarInfo";
import React from "react";

export interface Benefit {
  name: string;
  description: string;
  price: number;
}

export interface BenefitAndFeaturesPrice {
  clickedBenefit: number;
  selectedFeatures: number[];
  clickedBenefitPrice: number;
  selectedFeaturesPrice: number;
}

export const benefits: Benefit[] = [
  {
    name: "Protectie de baza (CDW)",
    description: `Responsabilitatea dvs. in caz de dauna sau furt este egal cu valoarea depozitului`,
    price: 0,
  },
  {
    name: "Protectie medie (SCDW)",
    description: `Responsabilitatea dvs. in caz de dauna sau furt este egal cu valoarea depozitului`,
    price: 49.99,
  },
  {
    name: "Protectie totala (SCDW+)",
    description: `Responsabilitatea dvs. in caz de dauna sau furt este egal cu valoarea depozitului`,
    price: 89.99,
  },
];

// -------------------Start COMOPONENT --------------------------------------------------------------------------

const ReserveCarPage: React.FC = () => {
  const car = useLocation().state?.car; //Get data from previous page
  const rentInputData = useLocation().state?.rentInputData; //Get data from previous page

  const [getBenefitAndFeaturesPrice, setGetBenefitAndFeaturePrice] =
    useState<BenefitAndFeaturesPrice>({
      clickedBenefit: 0,
      selectedFeatures: [],
      clickedBenefitPrice: 0,
      selectedFeaturesPrice: 0,
    });

  const getRentalDays = (): number => {
    const start: Date = new Date(rentInputData.rentDate);
    const end: Date = new Date(rentInputData.returnDate);
    const diff: number = Math.ceil(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    return diff;
  };
  const rentalDays = getRentalDays();

  const handleBenefitSelection = (index: number): void => {
    setGetBenefitAndFeaturePrice((prev) => ({
      ...prev,
      clickedBenefit: index,
      clickedBenefitPrice: benefits[index].price,
    }));
  };

  const handleFeatureSelection = (index: number): void => {
    setGetBenefitAndFeaturePrice((prev) => {
      const currentFeatures = prev.selectedFeatures;
      let features: number[];
      let featurePrice;

      if (currentFeatures.includes(index)) {
        features = currentFeatures.filter((item) => item !== index);
        featurePrice = prev.selectedFeaturesPrice - car.feature_price;
      } else {
        features = [...currentFeatures, index];
        featurePrice = prev.selectedFeaturesPrice + car.feature_price;
      }
      return {
        ...prev,
        selectedFeatures: features,
        selectedFeaturesPrice: featurePrice,
      };
    });
  };

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
          <img src={car.image} alt="to-reserve-car-image" />
          <div className="reserved-car-price-tag">
            <span>{car.price * rentalDays}$</span>
            <span>{rentalDays} zile</span>
          </div>
        </div>

        <h2>Protectie in caz de dauna</h2>
        <div key={car.id} className="reserved-car-benefits">
          {benefits.map((benefit: Benefit, index: number) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                handleBenefitSelection(index);
              }}
              className={`car-benefit-card ${
                getBenefitAndFeaturesPrice.clickedBenefit === index
                  ? "selected"
                  : ""
              }`}
            >
              <h3>{benefit.name}</h3>
              <span>{`${benefit.price} ${car.currency}`}</span>
              <p>{benefit.description}</p>
            </button>
          ))}
        </div>

        <h2>Echipamente aditionale</h2>
        <div key={car.id + 1} className="reserved-car-features">
          {car.features.map((feature: string[], index: number) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                handleFeatureSelection(index);
              }}
              className={`car-feature-card ${
                getBenefitAndFeaturesPrice.selectedFeatures.includes(index)
                  ? "selected"
                  : ""
              }`}
            >
              <h3>{feature}</h3>
              <span>{`${car.feature_price} ${car.currency}`}</span>
            </button>
          ))}
        </div>
        <ReservedCarInfo
          getBenefitAndFeaturesPrice={getBenefitAndFeaturesPrice}
          rentInputData={rentInputData}
          car={car}
          rentalDays={rentalDays}
        />
      </section>
    </div>
  );
};

export default ReserveCarPage;
