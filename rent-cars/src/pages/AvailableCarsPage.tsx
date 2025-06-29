import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
import apiClient from "../components/API";
import { Car } from "../components/ShowCarsSection";

// location: "Bucharest";
// rentDate: "2025-06-27";
// returnDate: "2025-06-27";

const getCars = async (): Promise<Car[]> => {
  try {
    const response = await apiClient("/");
    return response.data;
  } catch (error) {
    console.error("No car");
    return [];
  }
};
const AvailableCarsPage: React.FC = () => {
  const navigate = useNavigate();
  const rentInputData = useLocation().state?.rentInputData;

  const [allCars, setAllCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchedCars = async () => {
      try {
        const cars = await getCars();
        setAllCars(cars);
        return [];
      } catch (error) {
        console.error("No car");
      }
    };

    fetchedCars();
  });

  const availableCars = allCars.filter((car) => {
    if (!rentInputData.rentDate) return true; // Show all cars if no date selected

    // Only show cars that are available on or after the rental date
    return new Date(car.available_from) <= new Date(rentInputData.rentDate);
  });

  const handleReserveButton = (car: {}) =>
    navigate("/reserve-car", { state: { car, rentInputData } });

  return (
    <div className="std-section">
      <div>
        <h2>Available Cars</h2>
        {/* Display the search criteria */}
        <p>Rent Date: {rentInputData.rentDate}</p>
        <p>Return Date: {rentInputData.returnDate}</p>
        <p>Location: {rentInputData.location}</p>
      </div>
      <section className="available-cars-container">
        {availableCars.map((car, index) => (
          <div key={index} className="available-car-card">
            <img src={car.image} alt="available-car-image" />
            <h3>{`${car.brand} ${car.model}`}</h3>
            <div className="flex gap-2 font-semibold ">
              {car.characteristics.map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </div>
            <p>{`${car.price} ${car.currency}/day`}</p>
            <button
              type="button"
              onClick={() => {
                handleReserveButton(car);
              }}
            >
              Rezerva acum!
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AvailableCarsPage;
