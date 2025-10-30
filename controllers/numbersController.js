const numbersService = require('../services/numbersService');


class NumbersController {

    // POST /numeros/entrada
    async postEntrada(req, res) {
        try {
            const newNumber = await numbersService.addNumber(req.body);
            res.status(201).json({ message: "Number added", number: newNumber })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    // GET /numeros/entrada
    async getEntrada(req, res) {
        const result = await numbersService.getAll();
        res.json(result);
    }

    // GET /numeros/promedio
    async getPromedio(req, res) {
        const result = await numbersService.average();
        res.json(result);
    }
    // GET /numeros/minmax
    async getMinMax(req, res) {
        const resultado = await numbersService.obtainMinMax();
        res.json(resultado);
    }

    // GET /numeros/cantidad
    async getCantidad(req, res) {
        const resultado = await numbersService.obtainQuantity();
        res.json(resultado);
    }



}

module.exports = new NumbersController();