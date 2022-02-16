// Encargado de obtener todas las rutas posibles de la aplicación

const post = require("./api/post");

module.exports = (app) => {
  app.use("/api/posts", post);
};
