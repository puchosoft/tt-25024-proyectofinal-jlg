# Talento Tech - Back-End Node JS - Comision 25024
## Jose Luis Gonzalez - Proyecto Final

## Express REST API
- Desarrollada con **Node.js** y **Express**
- Diseñada para manejar operaciones CRUD mediante los metodos HTTP: GET, POST y DELETE
- Modular, escalable y segura.

---

### Descripcion general
Este proyecto es una API base lista para usarse o expandirse según las necesidades de tu aplicación. Incluye:
- Autenticación con JWT
- Validación de datos de entrada
- Manejo centralizado de errores
- Conexión a base de datos (Cloud Firestore o fácilmente adaptable a otras)
- Separación clara entre rutas, controladores, servicios y modelos

---

### Requerimientos
- Node.js v22.14.0 o mas reciente
- npm v11.2.0 o mas reciente
- Modulo express v5.1.0 o mas reciente
- Modulo firebase v12.0.0 o mas reciente
- Modulo jsonwebtoken v9.0.2 o mas reciente
- Modulo cors v2.8.5 o mas reciente
- Modulo dotenv v17.2.0 o mas reciente
- Base de datos en Cloud Firestore (Firebase)

---

### Instrucciones de instalacion
```bash
# Clonar el repositorio
git clone https://github.com/puchosoft/tt-25024-proyectofinal-jlg.git

# Ingresar al proyecto
cd tt-25024-proyectofinal-jlg

# Instalar dependencias
npm install

# Copiar variables de entorno de ejemplo
cp .env.example .env

# Configurar variables reales en .env
# El archivo contiene las instrucciones para cada variable

# Iniciar el servidor en modo desarrollo
npm run dev

# o iniciar en modo producción
npm start
```

---

### Estructura del proyecto
```plaintext
carpeta-destino/
├── src/
│   ├── auth/              # Lógica de autenticacion de JWT (tokens y validaciones)
│   ├── config/            # Configuraciones globales (DB, env)
│   ├── controllers/       # Lógica que responde a las rutas (endpoints)
│   ├── middlewares/       # Middlewares reutilizables (auth, logs, errores)
│   ├── models/            # Modelos de datos (ej. Firestore y Arrays)
│   ├── routes/            # Definición de endpoints y rutas
│   └── services/          # Logica de negocio reutilizable
├── .env.example           # Archivo de ejemplo para variables de entorno
├── .gitignore             # Archivos/Carpetas ignoradas por git
├── LICENSE                # Licencia de uso, modificacion y distribucion del codigo del proyecto
├── README.md              # Documentación del proyecto
├── index.js               # Punto de entrada: arranca la app y el servidor
├── package-lock.json      # Dependencias del proyecto
└── package.json           # Dependencias y scripts del proyecto
```

---

### Instrucciones de uso de la API
Una vez iniciado el servidor, accedé a los endpoints a través de http://localhost:PUERTO/
- donde PUERTO es el valor de la variable de entorno configurada en el archivo .env

#### <ins>Endpoint disponibles:</ins>
**Login (no protegida)**\
Permite obtener un token con tiempo de expiracion (configurado en .env) para acceder a las rutas protegidas de la API

```http
POST /auth/login
Content-Type: application/json
{
  "email": "juan@mail.com",
  "password": "123456"
}
```

>El proyecto incluye dos credenciales de prueba que deben ser eliminadas antes de pasar a fase de produccion:
>- user@dominio.com / 1234
>- admin@dominio.com / 4321  

\
**Obtener la lista de todos los productos (protegida)**\
```http
GET /api/products
Authorization: Bearer <token_jwt>
```
\
**Obtener un producto por su ID (protegida)**\
```http
GET /api/products/<id>
Authorization: Bearer <token_jwt>
```
\
**Eliminar un producto por su ID (protegida)**\
```http
DELETE /api/products/<id>
Authorization: Bearer <token_jwt>
```
\
**Agregar un producto (protegida)**\
```http
POST /api/products/create
Content-Type: application/json
{
  "name": "nombre del producto",
  "price": 1234.56
}
Authorization: Bearer <token_jwt>
```

---

### Autor
Desarrolado por *José Luis González* - <puchosoft@gmail.com>

---

### Licencia
MIT ©2025\
Consulta el archivo [LICENSE](./LICENSE)
