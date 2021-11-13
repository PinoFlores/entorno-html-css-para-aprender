const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const data = require("../data/data.js").data;

const dataProvider = (req, res, next) => {
  let modelKey = req.originalUrl.match(/[a-z]+/);

  if (modelKey && modelKey.lenght) {
    modelKey = modelKey[0];
  }

  const notFound = fs.readFileSync(path.join(__dirname, "./notFound.html")).toString();

  req.model = data[modelKey];
  req.routeName = modelKey;
  req.notFound = notFound;

  next();
};

app.use(dataProvider);

module.exports = app;
