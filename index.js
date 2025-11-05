const jsonServer = require('json-server');
const cors = require('cors'); // Importamos cors
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000; // ¡Clave para Render!

server.use(cors()); // Usamos cors (permite todas las peticiones)
server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server está corriendo en el puerto ${PORT}`);
});
