const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const errorHandler = require('./middlewares/errorHandler');
const subjectRoutes = require('./interfaces/routes/v1/subjectRoutes');

const app = express();

app.use(express.json());

// Rutas versionadas
app.use('/api/v1/subjects', subjectRoutes);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Manejo de errores
app.use(errorHandler);

module.exports = app;
