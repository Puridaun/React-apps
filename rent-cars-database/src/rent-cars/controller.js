const pool = require('../../db')
const query = require('./queries');


const getCars = (req, res) => {
    pool.query(query.getCars, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


const getCarById = (req, res) => {

    const id = parseInt(req.params.id);

    pool.query(query.getCarById, [id], (error, results) => {

        if (error) throw error;

        if (results.rows.length === 0) {
            return res.status(404).json({ message: 'Car not found by this id' })
        }
        res.status(200).json(results.rows);
    });
};


const addCar = (req, res) => {

    const { brand, model, available_from, is_car_rented, price, currency, image, characteristics, features } = req.body;

    pool.query(query.addCar, [brand, model, available_from, is_car_rented, price, currency, image, characteristics, features], (error, results) => {

        if (error) throw error;
        res.status(201).json('New car added succesfully');
    })
}

const updateCarRentParams = (req, res) => {

    const id = parseInt(req.params.id);
    const { is_promoted, available_from } = req.body;

    pool.query(query.getCarById, [id], (error, results) => {

        if (error) throw error;

        if (results.rows.length === 0) {
            return res.status(404).json({ message: 'Car not found by this id' })
        }

        pool.query(query.updateCarRentParams, [is_promoted, available_from, id], (error, results) => {

            if (error) throw error;
            res.status(200).json(`Car date parameters available_from and is_promoted are updated`, results.rows);
        })


    });


}


module.exports = {
    getCars,
    getCarById,
    addCar,
    updateCarRentParams,
};