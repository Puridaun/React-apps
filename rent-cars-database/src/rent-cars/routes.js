const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get('/', controller.getCars);
router.get('/:id', controller.getCarById);
router.post('/', controller.addCar);
router.put('/:id', controller.updateCarRentParams);


module.exports = router;