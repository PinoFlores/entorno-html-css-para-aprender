const _ = require("lodash");
const binder = require("./framework/binder");
const server = require("./framework/index");

// Modules
const modules = require("./src/index");

server.get("/women", (req, res) => {
  const cont = binder(modules.root, {
    content: modules[req.routeName](binder, req.model),
  });
  res.send(cont);
});

server.get("/men", (req, res) => {
  const cont = binder(modules.root, {
    content: modules[req.routeName](binder, req.model),
  });
  res.send(cont);
});

server.get("*", (req, res) => {
  if (!_.has(modules, req.routeName)) {
    return res.send(req.notFound);
  }
  return res.send("SERVER ERROR");
});

server.listen(3001, () => {
  console.log(`Click en este enlace http://localhost:3001 para abrirlo en el navegador!`);
});
