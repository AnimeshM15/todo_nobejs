const todoSerializer = require("./todoSerializer");

module.exports = (req, res, next) => {
  return todoSerializer(req["data"]);
};
