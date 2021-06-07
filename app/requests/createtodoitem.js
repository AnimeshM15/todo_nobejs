const validatorBase = require("./base");

const constraints = {
  content: {
    presence: {
      allowEmpty: false,
      message: "^Please enter content",
    },
  },
};

module.exports = (...props) => {
  return validatorBase(constraints, ...props);
};