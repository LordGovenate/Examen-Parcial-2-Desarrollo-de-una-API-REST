const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
require('dotenv').config();

const subjectsRoutes = require('./routes/subjects');

app.use(express.json());

// Rutas de la API
app.use('/api/subjects', subjectsRoutes);

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API REST escuchando en el puerto ${port}`);
});
