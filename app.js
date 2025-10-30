const express = require('express');
const numbersRouter = require('./routes/numbersRoutes');

const app = express();
const port = 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Para el formulario HTML opcional

// Montaje del Router con ruta base /numeros
app.use('/numeros', numbersRouter);

// Inicialización del servidor
app.listen(port, () => {
    console.log(`Servidor MVC escuchando en http://localhost:${port}`);
    console.log(`Rutas base: /numeros`);
});