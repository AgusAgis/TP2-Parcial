const numbersDAO = require('../data/numbersDAO')

class NumbersService {

    async addNumber(data) {
        const number = parseFloat(data.number);

        if (isNaN(number)) {
            throw new Error("The value provided must be a number")
        }

        numbersDAO.save(number);
        return number;
    }

    async getAll() {
        const numbers = numbersDAO.getAll();
        return {
            numbers: numbers
        };
    }

    async average() {
        const numbers = numbersDAO.getAll();
        const quantity = numbers.length;

        if (quantity.length < 0) {
            return {
                average: 0
            }
        }

        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const average = sum / quantity;
        return {
            average: average.toFixed(2)
        }

    }

    async obtainMinMax() {
        const numbers = numbersDAO.getAll();
        if (numbers.length === 0) {
            return {
                min: null, max: null
            }
        }

        const min = Math.min(...numbers);
        const max = Math.max(...numbers);

        return { min, max }

    }

    async obtainQuantity() {
        const numbers = numbersDAO.getAll();
        return {
            quantity: numbers.length
        }
    }
}

module.exports = new NumbersService();