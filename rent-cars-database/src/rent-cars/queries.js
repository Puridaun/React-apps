const getCars = 'SELECT * FROM public.cars';
const getCarById = 'SELECT * FROM public.cars WHERE id = $1'
const addCar = 'INSERT INTO public.cars (brand, model, available_from,  price, currency, image, is_car_rented, features, characteristics) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)'
const updateCarRentParams = 'UPDATE public.cars SET is_promoted = $1, available_from = $2 WHERE id = $3 ';


module.exports = {
    getCars,
    getCarById,
    addCar,
    updateCarRentParams,
};