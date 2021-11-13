/**
 * Este codigo se encarga de cargar la pagina en servidor.
 * NO CAMBIAR ESTE CODIGO!
 */

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "./index.html");

module.exports = function (bind, model) {
  const html = fs.readFileSync(filePath).toString();
  return bind(html, model);
};
