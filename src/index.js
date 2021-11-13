/**
 * Este es el codigo que se encarga de cargar el modulo.
 * NO CAMBIAR NADA EN ESTE ARCHIVO.
 */

const fs = require("fs");
const path = require("path");
const binder = require("../framework/binder");

const styles = fs.readFileSync(path.join(__dirname, "./styles.css")).toString();
const html = fs.readFileSync(path.join(__dirname, "./index.html")).toString();

let moduleDetails = null;

try {
  moduleDetails = require("./pages/details/module");
} catch (error) {
  throw new Error("Aun no se ha implementado el module details!");
}

module.exports = {
  women: moduleDetails,
  men: moduleDetails,
  root: binder(html, {
    styles: `<style>${styles}</style>`,
  }),
};
