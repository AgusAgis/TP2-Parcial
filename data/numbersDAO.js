//Array para alacenar los numeros en memoria
let numbers = [];

class NumbersDAO {

    //funcion para retornar todos los numeros almacenados
    getAll() {
        return numbers;
    }

    //funcion para guardar un numero en el array de numeros
    save(number) {
        numbers.push(number);
    }
}
module.exports = new NumbersDAO();