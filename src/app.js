const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
require('dotenv').config();
const errorHandler = require('./middlewares/errorHandler');

const subjectsRoutes = require('./routes/v1/subjects');

app.use(express.json());

// Rutas de la API
app.use('/api/v1/subjects', subjectsRoutes);

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API REST escuchando en el puerto ${port}`);
});
