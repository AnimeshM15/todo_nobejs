//const todoItemSerializer = require("./todoItemSerializer");

module.exports = (instance) => {
  const attributes = ["id","title","createdAt","updatedAt"];
  //const associations = ["todoItems"];

  const result = {};

  for (const attribute of attributes) {
    result[attribute] = instance[attribute];
  }

  /*for (const association of associations) {
    result[association] = todoItemSerializer(instance[association]);
  }
*/
  return result;
};
