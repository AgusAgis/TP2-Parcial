# Parcial de la materia TP2
API de Análisis de NúmerosEste proyecto consiste en la implementación de un servidor de servicios web (API REST) desarrollado en Node.js y Express, siguiendo la arquitectura de Tres Capas y el patrón DAO (Data Access Object). La API permite el ingreso individual de números y ofrece diversas rutas para obtener estadísticas básicas sobre los datos almacenados.

💻 Tecnologías Utilizadas
Backend (Motor) Node.js Entorno de ejecución de JavaScript.
Framework Web Express.js Creación del servidor y gestión de rutas (Router).
Arquitectura por Capas (MVC-like). Separación de responsabilidades (Controller, Service, DAO).
Persistencia en MemoriaAlmacenamiento temporal de los números en un array global dentro de la capa DAO.
Lenguaje JavaScript (ES6 Classes, Async/Await) Implementación de las clases y manejo de operaciones asíncronas.

📐 Estructura del Proyecto
El proyecto está organizado en la siguiente arquitectura para asegurar la separación de responsabilidades:/tu-proyecto
├── data/              # 1. Capa de Persistencia (DAO)
│   └── numbersDAO.js  #   -> Lógica de acceso directo a la memoria.
├── services/          # 2. Capa de Servicio (Lógica de Negocio)
│   └── numbersService.js # -> Validaciones y cálculos (Promedio, Min/Max).
├── controllers/       # 3. Capa de Controlador
│   └── numbersController.js # -> Manejo de req, res y llamadas al Service.
├── routes/
│   └── numbersRoutes.js # -> Definición de endpoints y montaje del Controller.
└── app.js             # Punto de entrada y configuración de middleware.

🔗 Endpoints de la API

Todas las rutas tienen la base /numeros.

MétodoRuta CompletaDescripciónFormato de Entrada/Salida
POST/numeros/entradaIncorpora un nuevo número al sistema de persistencia. Entrada: {"numero": x}Salida: 201 Created 
GET/numeros/entradaRetorna todos los números ingresados.Salida: {"numeros": [x, y, z, ...]}
GET/numeros/promedioCalcula y devuelve el promedio de los números.Salida: {"promedio": xx}
GET/numeros/minmaxRetorna el valor mínimo y máximo de los números.Salida: {"min": yy, "max": zz}
GET/numeros/cantidadDevuelve la cantidad total de números guardados.Salida: {"cantidad": X}

🚀 Cómo Poner en Marcha el Servidor
Sigue estos pasos para clonar el proyecto y ejecutar la aplicación localmente:
Clonar el Repositorio: Bash git clone https://github.com/AgusAgis/TP2-Parcial.git
cd TP2-Parcial
Instalar Dependencias:Bash npm install
Iniciar el Servidor:Bash node app.js
El servidor se ejecutará en http://localhost:8080.

