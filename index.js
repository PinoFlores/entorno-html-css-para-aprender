const _ = require("lodash");
const binder = require("./framework/binder");
const server = require("./framework/index");

// Modules
const modules = require("./src/index");

server.get("/women", (req, res) => {
  // console.log(modules.root);
  const cont = binder(modules.root, {
    content: modules[req.routeName](binder, req.model),
  });
  // console.log(cont);
  res.send(cont);
});

server.get("/men", (req, res) => {
  // console.log(modules.root);
  const cont = binder(modules.root, {
    content: modules[req.routeName](binder, req.model),
  });
  // console.log(cont);
  res.send(cont);
});

server.get("*", (req, res) => {
  if (!_.has(modules, req.routeName)) {
    return res.send(req.notFound);
  }
  return res.send("SERVER ERROR");
});

server.listen(3001, () => {
  console.log(`Example app listening at http://localhost:3001`);
});
