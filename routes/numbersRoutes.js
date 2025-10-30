const express = require('express');
const router = express.Router();
const numbersController = require('../controllers/numbersController');

//POST /numeros/entrada
router.post('/entrada', numbersController.postEntrada);

//GET /numeros/entrada devuelve todos los numeros
router.get('/entrada', numbersController.getEntrada);

// GET /numeros/promedio - Retorna el promedio
router.get('/promedio', numbersController.getPromedio);

// GET /numeros/minmax - Retorna el máximo y mínimo
router.get('/minmax', numbersController.getMinMax);

// GET /numeros/cantidad - Retorna la cantidad
router.get('/cantidad', numbersController.getCantidad);

module.exports = router;