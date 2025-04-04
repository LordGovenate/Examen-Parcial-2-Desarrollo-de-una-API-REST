# API REST de Materias Escolares

Esta API REST permite gestionar materias escolares, implementando operaciones CRUD y un endpoint para obtener materias con paginación. Además, cuenta con Swagger para la documentación de los endpoints.

## Características

- **Lenguaje y Framework:** Node.js y Express.
- **Base de Datos:** MySQL.
- **Operaciones CRUD:** Crear, leer, actualizar y eliminar materias.
- **Paginación:** Endpoint GET para obtener materias con parámetros `page` y `size`.
- **Documentación:** Swagger.
- **Docker:** La API y la base de datos se ejecutan en contenedores Docker.

## Requisitos

- Docker y Docker Compose instalados.

## Instrucciones de Instalación y Ejecución

1. **Clonar el repositorio:**

   ```bash
   git clone <URL-del-repositorio>
   cd api-rest

Hostname: 127.0.0.1
Port: 3306 
Username: user 
Password: userpass
Default Schema: school 

## Levantar el entorno completo con Docker Compose:
docker-compose build
docker-compose up

## Acceder a la API y a la documentación Swagger:
http://localhost:3000/api-docs

## Probar en postman (POST)
http://localhost:3000/api/subjects

{
  "name": "Matemáticas",
  "description": "Materia de cálculo y álgebra."
}

## Probar en postman (GET)
http://localhost:3000/api/subjects/1

## Probar en postman (PUT)
http://localhost:3000/api/subjects/2

{
  "name": "Historia Actualizada",
  "description": "Descripción actualizada."
}

## Probar en postman (DELETE)

http://localhost:3000/api/subjects/2