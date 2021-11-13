const _ = require("lodash");

module.exports = function (temp, model) {
  const getProp = (data, key) => {
    if (key.includes(".")) {
      let value = data;
      for (let i of key.split(".")) value = value[i];

      return value;
    }
    return data[key];
  };

  let keys = temp.match(/{([^}]+)}/g);
  keys = keys.map((item) => {
    return item.match(/[a-z.a-z|0-9]+/)[0];
  });

  for (let i of keys) {
    if (_.has(model, i)) {
      temp = temp.replace(`{${i}}`, getProp(model, i));
    }
  }

  return temp;
};
