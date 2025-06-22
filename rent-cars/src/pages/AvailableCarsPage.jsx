import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

// API pentru mașini de închiriat

const cars = [
    {
        id: 1,
        brand: 'BMW i4',
        model: 'i4',
        availableFrom: '2025-06-09',
        price: 120,
        category: 'SUV',
        year: 2022,
        fuel: 'Diesel',
        transmission: 'Automatic',
        seats: 5,
        image: 'https://example.com/bmw-x4.jpg',
        features: ['GPS', 'A/C', 'Bluetooth', 'Leather seats']
    },
    {
        id: 2,
        brand: 'BMW ix2',
        model: 'ix2',
        availableFrom: '2025-06-09',
        price: 95,
        category: 'Sedan',
        year: 2021,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/audi-a4.jpg',
        features: ['GPS', 'A/C', 'Bluetooth']
    },
    {
        id: 3,
        brand: 'Kia',
        model: '',
        availableFrom: '2025-06-12',
        price: 75,
        category: 'Sedan',
        year: 2020,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/skoda-octavia.jpg',
        features: ['A/C', 'Bluetooth']
    },
    {
        id: 4,
        brand: 'Ford',
        model: 'Focus',
        availableFrom: '2025-06-09',
        price: 70,
        category: 'Hatchback',
        year: 2021,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/seat-leon.jpg',
        features: ['A/C', 'Bluetooth', 'USB']
    },
    {
        id: 5,
        brand: 'Dacia Logan',
        model: 'Logan',
        availableFrom: '2025-06-10',
        price: 65,
        category: 'Hatchback',
        year: 2020,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/ford-focus.jpg',
        features: ['A/C', 'Bluetooth']
    },
    {
        id: 6,
        brand: 'BMW i4',
        model: 'i4',
        availableFrom: '2025-06-11',
        price: 120,
        category: 'SUV',
        year: 2022,
        fuel: 'Diesel',
        transmission: 'Automatic',
        seats: 5,
        image: 'https://example.com/bmw-x4.jpg',
        features: ['GPS', 'A/C', 'Bluetooth', 'Leather seats']
    },
    {
        id: 7,
        brand: 'BMW ix2',
        model: 'ix2',
        availableFrom: '2025-06-13',
        price: 95,
        category: 'Sedan',
        year: 2021,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/audi-a4.jpg',
        features: ['GPS', 'A/C', 'Bluetooth']
    },
    {
        id: 8,
        brand: 'Kia',
        model: '',
        availableFrom: '2025-06-14',
        price: 75,
        category: 'Sedan',
        year: 2020,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/skoda-octavia.jpg',
        features: ['A/C', 'Bluetooth']
    },
    {
        id: 9,
        brand: 'Ford',
        model: 'Focus',
        availableFrom: '2025-06-15',
        price: 70,
        category: 'Hatchback',
        year: 2021,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/seat-leon.jpg',
        features: ['A/C', 'Bluetooth', 'USB']
    },
    {
        id: 10,
        brand: 'Dacia Logan',
        model: 'Logan',
        availableFrom: '2025-06-16',
        price: 65,
        category: 'Hatchback',
        year: 2020,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/ford-focus.jpg',
        features: ['A/C', 'Bluetooth']
    },
    {
        id: 11,
        brand: 'BMW i4',
        model: 'i4',
        availableFrom: '2025-06-17',
        price: 120,
        category: 'SUV',
        year: 2022,
        fuel: 'Diesel',
        transmission: 'Automatic',
        seats: 5,
        image: 'https://example.com/bmw-x4.jpg',
        features: ['GPS', 'A/C', 'Bluetooth', 'Leather seats']
    },
    {
        id: 12,
        brand: 'BMW ix2',
        model: 'ix2',
        availableFrom: '2025-06-18',
        price: 95,
        category: 'Sedan',
        year: 2021,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/audi-a4.jpg',
        features: ['GPS', 'A/C', 'Bluetooth']
    },
    {
        id: 13,
        brand: 'Kia',
        model: '',
        availableFrom: '2025-06-19',
        price: 75,
        category: 'Sedan',
        year: 2020,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/skoda-octavia.jpg',
        features: ['A/C', 'Bluetooth']
    },
    {
        id: 14,
        brand: 'Ford',
        model: 'Focus',
        availableFrom: '2025-06-20',
        price: 70,
        category: 'Hatchback',
        year: 2021,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/seat-leon.jpg',
        features: ['A/C', 'Bluetooth', 'USB']
    },
    {
        id: 15,
        brand: 'Dacia Logan',
        model: 'Logan',
        availableFrom: '2025-06-21',
        price: 65,
        category: 'Hatchback',
        year: 2020,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/ford-focus.jpg',
        features: ['A/C', 'Bluetooth']
    },
    {
        id: 16,
        brand: 'BMW i4',
        model: 'i4',
        availableFrom: '2025-06-22',
        price: 120,
        category: 'SUV',
        year: 2022,
        fuel: 'Diesel',
        transmission: 'Automatic',
        seats: 5,
        image: 'https://example.com/bmw-x4.jpg',
        features: ['GPS', 'A/C', 'Bluetooth', 'Leather seats']
    },
    {
        id: 17,
        brand: 'BMW ix2',
        model: 'ix2',
        availableFrom: '2025-06-23',
        price: 95,
        category: 'Sedan',
        year: 2021,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/audi-a4.jpg',
        features: ['GPS', 'A/C', 'Bluetooth']
    },
    {
        id: 18,
        brand: 'Kia',
        model: '',
        availableFrom: '2025-06-24',
        price: 75,
        category: 'Sedan',
        year: 2020,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/skoda-octavia.jpg',
        features: ['A/C', 'Bluetooth']
    },
    {
        id: 19,
        brand: 'Ford',
        model: 'Focus',
        availableFrom: '2025-06-25',
        price: 70,
        category: 'Hatchback',
        year: 2021,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/seat-leon.jpg',
        features: ['A/C', 'Bluetooth', 'USB']
    },
    {
        id: 20,
        brand: 'Dacia Logan',
        model: 'Logan',
        availableFrom: '2025-06-26',
        price: 65,
        category: 'Hatchback',
        year: 2020,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/ford-focus.jpg',
        features: ['A/C', 'Bluetooth']
    },
    {
        id: 21,
        brand: 'BMW i4',
        model: 'i4',
        availableFrom: '2025-06-27',
        price: 120,
        category: 'SUV',
        year: 2022,
        fuel: 'Diesel',
        transmission: 'Automatic',
        seats: 5,
        image: 'https://example.com/bmw-x4.jpg',
        features: ['GPS', 'A/C', 'Bluetooth', 'Leather seats']
    },
    {
        id: 22,
        brand: 'BMW ix2',
        model: 'ix2',
        availableFrom: '2025-06-28',
        price: 95,
        category: 'Sedan',
        year: 2021,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/audi-a4.jpg',
        features: ['GPS', 'A/C', 'Bluetooth']
    },
    {
        id: 23,
        brand: 'Kia',
        model: '',
        availableFrom: '2025-06-29',
        price: 75,
        category: 'Sedan',
        year: 2020,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/skoda-octavia.jpg',
        features: ['A/C', 'Bluetooth']
    },
    {
        id: 24,
        brand: 'Ford',
        model: 'Focus',
        availableFrom: '2025-06-30',
        price: 70,
        category: 'Hatchback',
        year: 2021,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/seat-leon.jpg',
        features: ['A/C', 'Bluetooth', 'USB']
    },
    {
        id: 25,
        brand: 'Dacia Logan',
        model: 'Logan',
        availableFrom: '2025-07-01',
        price: 65,
        category: 'Hatchback',
        year: 2020,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/ford-focus.jpg',
        features: ['A/C', 'Bluetooth']
    },
    {
        id: 26,
        brand: 'BMW i4',
        model: 'i4',
        availableFrom: '2025-07-02',
        price: 120,
        category: 'SUV',
        year: 2022,
        fuel: 'Diesel',
        transmission: 'Automatic',
        seats: 5,
        image: 'https://example.com/bmw-x4.jpg',
        features: ['GPS', 'A/C', 'Bluetooth', 'Leather seats']
    },
    {
        id: 27,
        brand: 'BMW ix2',
        model: 'ix2',
        availableFrom: '2025-07-03',
        price: 95,
        category: 'Sedan',
        year: 2021,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/audi-a4.jpg',
        features: ['GPS', 'A/C', 'Bluetooth']
    },
    {
        id: 28,
        brand: 'Kia',
        model: '',
        availableFrom: '2025-07-04',
        price: 75,
        category: 'Sedan',
        year: 2020,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/skoda-octavia.jpg',
        features: ['A/C', 'Bluetooth']
    },
    {
        id: 29,
        brand: 'Ford',
        model: 'Focus',
        availableFrom: '2025-07-05',
        price: 70,
        category: 'Hatchback',
        year: 2021,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/seat-leon.jpg',
        features: ['A/C', 'Bluetooth', 'USB']
    },
    {
        id: 30,
        brand: 'Dacia Logan',
        model: 'Logan',
        availableFrom: '2025-07-06',
        price: 65,
        category: 'Hatchback',
        year: 2020,
        fuel: 'Petrol',
        transmission: 'Manual',
        seats: 5,
        image: 'https://example.com/ford-focus.jpg',
        features: ['A/C', 'Bluetooth']
    }
]
const AvailableCarsPage = () => {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    // Extract individual parameters
    const rentDate = searchParams.get('rentDate');     // Gets "2025-06-15"
    const returnDate = searchParams.get('returnDate'); // Gets "2025-06-20"
    const location = searchParams.get('location');     // Gets "Bucharest"

    const carAvailableDate = {
        rentDate: rentDate,
        returnDate: returnDate,
        location: location
    }
    const availableCars = cars.filter((car) => {

        if (!rentDate) return true; // Show all cars if no date selected

        // Only show cars that are available on or after the rental date
        return new Date(car.availableFrom) <= new Date(rentDate);
    });

    const handleReserveCar = (car) => navigate('/reserve-car', { state: { car, carAvailableDate } })

    console.log(carAvailableDate)

    return (

        <div className="std-section">

            <div>
                <h2>Available Cars</h2>
                {/* Display the search criteria */}
                <p>Rent Date: {rentDate}</p>
                <p>Return Date: {returnDate}</p>
                <p>Location: {location}</p>
            </div>
            <section className="available-cars-container">
                {availableCars.map((car, index) => (
                    <div key={index} className="available-car-card">
                        <img src={`./src/assets/${car.brand}.png`} />
                        <h3>{car.brand}</h3>
                        <p>{car.price} $/day</p>
                        <button onClick={() => { handleReserveCar(car) }}>Rezerva acum!</button>
                    </div>
                ))}
            </section>
        </div>
    );

}

export default AvailableCarsPage;

