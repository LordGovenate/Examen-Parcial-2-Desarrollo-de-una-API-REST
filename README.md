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
   git clone <https://github.com/LordGovenate/Examen-Parcial-2-Desarrollo-de-una-API-REST.git>
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
http://localhost:3000/api/v1/subjects

{
  "name": "Matemáticas",
  "description": "Materia de cálculo y álgebra."
}

## Probar en postman (GET)
http://localhost:3000/api/v1/subjects/3

## Probar en postman (PUT)
http://localhost:3000/api/v1/subjects/3

{
  "name": "Historia Actualizada",
  "description": "Descripción actualizada."
}

## Probar en postman (DELETE)
http://localhost:3000/api/v1/subjects/3

## Probar en postman (GET paginacion)
http://localhost:3000/api/v1/subjects?page=1&size=10

## 🔐 Autenticación OAuth2.0 con Hydra

Esta API está protegida mediante OAuth 2.0 usando **Client Credentials Grant** con [ORY Hydra](https://www.ory.sh/hydra/).

### Crear clientes OAuth2

Ejecutar los siguientes JSON en tu herramienta de administración (por ejemplo, Hydra Admin API):

```json
// Cliente de lectura
{
  "client_id": "kemonito8",
  "client_secret": "1234-secret",
  "grant_types": ["client_credentials"],
  "response_types": ["token"],
  "scope": "read:subjects",
  "token_endpoint_auth_method": "client_secret_basic",
  "access_token_strategy": "jwt"
}
```

```json
// Cliente de escritura
{
  "client_id": "kemonito9",
  "client_secret": "1234-secret",
  "grant_types": ["client_credentials"],
  "response_types": ["token"],
  "scope": "write:subjects",
  "token_endpoint_auth_method": "client_secret_basic",
  "access_token_strategy": "jwt"
}
```

### Obtener un token en Postman

1. Ir a la pestaña **Authorization** del request.
2. Seleccionar **OAuth 2.0** > **Get New Access Token**
3. Configurar así:
   - Token Name: `token-8`
   - Grant Type: `Client Credentials`
   - Access Token URL: `http://localhost:4444/oauth2/token`
   - Client ID: `kemonito8`
   - Client Secret: `1234-secret`
   - Scope: `read:subjects`
   - Client Authentication: `Send as Basic Auth header`
4. Presiona **Get Token** y luego **Use Token**

> Este token debe incluirse automáticamente como `Bearer` en las peticiones a los endpoints protegidos.