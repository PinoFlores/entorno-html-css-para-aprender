/**
 * Este es el codigo que se encarga de cargar el modulo.
 * NO CAMBIAR NADA EN ESTE ARCHIVO.
 */

const fs = require("fs");
const path = require("path");
const binder = require("../framework/binder");
const modulex = require("./pages/details/module");
const home = require("./pages/home/module");

const styles = fs.readFileSync(path.join(__dirname, "./styles.css")).toString();
const html = fs.readFileSync(path.join(__dirname, "./index.html")).toString();

module.exports = {
  women: modulex,
  men: modulex,
  home,
  root: binder(html, {
    styles: `<style>${styles}</style>`,
  }),
};
