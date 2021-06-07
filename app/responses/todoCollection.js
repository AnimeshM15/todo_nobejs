const todoSerializer = require("./todoSerializer");

module.exports = (req, res, next) => {
  let result = req["todoList"].map((i) => {
    return todoSerializer(i);
  });
  return result;
};
