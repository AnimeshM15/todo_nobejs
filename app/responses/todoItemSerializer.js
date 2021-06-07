module.exports = (instance) => {
  const attributes = ["id", "content","complete","createdAt","updatedAt","todoId"];

  const result = {};

  for (const attribute of attributes) {
    result[attribute] = instance[attribute];
  }

  return result;
};
